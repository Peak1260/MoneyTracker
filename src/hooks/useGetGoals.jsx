import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { query, where, collection, onSnapshot } from "firebase/firestore";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetGoals = () => {
  const [goals, setGoals] = useState([]);
  const { userID } = useGetUserInfo();

  useEffect(() => {
    if (!userID) return;

    const goalsCollectionRef = collection(db, "goals");
    const queryGoals = query(goalsCollectionRef, where("userID", "==", userID));

    const unsubscribe = onSnapshot(queryGoals, (snapshot) => {
      const goalData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGoals(goalData);
    }, (error) => {
      console.error("Error fetching goals: ", error);
    });

    return () => unsubscribe();
  }, [userID]);

  return { goals };
};
