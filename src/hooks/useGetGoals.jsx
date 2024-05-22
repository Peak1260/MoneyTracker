import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { query, where, collection, onSnapshot } from "firebase/firestore";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetGoals = () => {
  const [goals, setGoals] = useState([]);
  const { userID } = useGetUserInfo();
  const goalsCollectionRef = collection(db, "goals");

  useEffect(() => {
    let unsubscribe;
    try {
      const queryGoals = query(goalsCollectionRef, where("userID", "==", userID));

      unsubscribe = onSnapshot(queryGoals, (snapshot) => {
        const goalData = [];
        snapshot.forEach((doc) => {
          goalData.push({ id: doc.id, ...doc.data() });
        });
        setGoals(goalData);
      });
    } catch (error) {
      console.error("Error fetching goals: ", error);
    }

    return () => unsubscribe && unsubscribe();
  }, [userID]);

  return { goals };
};
