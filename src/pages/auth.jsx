import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden p-0">
        <div className="p-5 rounded-lg shadow-lg text-center text-gray-800 max-w-lg mx-auto">
            <p className="text-2xl font-bold mb-3">Please sign in to continue</p>
            <button className="bg-green-500 text-gray-800 text-lg py-2 px-5 rounded cursor-pointer transition duration-300 hover:bg-green-600">
                Sign in with Google
            </button>
        </div>
    </div>
);
};