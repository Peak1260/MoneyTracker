import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google icon

export const Auth = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          Welcome to MoneyTracker
        </h1>
        <p className="text-gray-600 mb-8">
          Sign in with Google to get started tracking your finances.
        </p>
        <button
          onClick={signInWithGoogle}
          className="flex items-center justify-center gap-3 bg-white border border-gray-300 hover:shadow-md px-6 py-3 rounded-lg transition duration-300 mx-auto"
        >
          <FcGoogle className="text-2xl" />
          <span className="text-gray-800 font-medium">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};
