import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddGoals = () => {
  const goalsCollectionRef = collection(db, "goals");
  const { userID } = useGetUserInfo();

  const addGoal = async ({ goal, achievementCriteria, realistic }) => {
    try {
      await addDoc(goalsCollectionRef, {
        userID,
        goal,
        achievementCriteria,
        realistic,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return { addGoal };
};
