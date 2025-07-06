import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { query, where, orderBy, collection, onSnapshot } from "firebase/firestore";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionTotals, setTransactionTotals] = useState({
    balance: 0.0,
    income: 0.0,
    expenses: 0.0,
  });

  const { userID } = useGetUserInfo();

  useEffect(() => {
    if (!userID) return;

    const transactionCollectionRef = collection(db, "transactions");
    const queryTransactions = query(
      transactionCollectionRef,
      where("userID", "==", userID),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
      let docs = [];
      let totalIncome = 0;
      let totalExpenses = 0;

      snapshot.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;

        docs.push({ ...data, id });

        if (data.transactionType === "expense") {
          totalExpenses += Number(data.transactionAmount);
        } else {
          totalIncome += Number(data.transactionAmount);
        }
      });

      setTransactions(docs);

      const balance = totalIncome - totalExpenses;
      setTransactionTotals({
        balance,
        expenses: totalExpenses,
        income: totalIncome,
      });
    }, (err) => {
      console.error("Error fetching transactions:", err);
    });

    return () => unsubscribe();
  }, [userID]);

  return { transactions, transactionTotals };
};
