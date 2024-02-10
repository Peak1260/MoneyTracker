import {useEffect, useState} from "react";
import {db} from "../config/firebase";
import {query, where, orderBy, collection, onSnapshot} from "firebase/firestore";
import {useGetUserInfo} from "./useGetUserInfo";

export const useGetTransaction = () => {
    const [transactions, setTransactions] = useState([]);
    const [transactionTotals, setTransactionTotals] = useState({balance: 0.0, income: 0.0, expense: 0.0})

    const transactionCollectionRef = collection(db, "transactions");
    const {userID} = useGetUserInfo();

    const getTransactions = async () =>{
        let unsubscribe;
        try {
            const queryTransactions = query(transactionCollectionRef, where("userID", "==", userID), orderBy("createdAt"))
            
            let docs = [];
            let totalIncome = 0;
            let totalExpense = 0;
            unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
                snapshot.forEach((doc) =>{
                    const data = doc.data();
                    const id = doc.id;

                    docs.push({ ...data, id});

                    if (data.transactionType === "expense"){
                        totalExpense += Number(data.transactionAmount);
                    } else{
                        totalIncome += Number(data.transactionAmount);
                    }
                });

                setTransactions(docs);

                let balance = totalIncome - totalExpense;
                setTransactionTotals({
                    balance,
                    totalExpense,
                    totalIncome,
                });
            });
            return 
        } 
        catch (err) {
            console.error(err);
        }

        return () => unsubscribe();
    };

    useEffect(() => {
        getTransactions()
    }, [])

    return {transactions, transactionTotals};
};