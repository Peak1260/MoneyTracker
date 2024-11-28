import React from "react";
import { useAddGoals } from "../hooks/useAddGoals";
import { useGetGoals } from "../hooks/useGetGoals";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

export const Goals = () => {
    const { addGoal } = useAddGoals();
    const { goals } = useGetGoals();
    const navigate = useNavigate();

    const signUserOut = async () => {
        try {
            await signOut(auth);
            localStorage.clear();
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const goal = formData.get("goal");
        const achievementCriteria = formData.get("achievementCriteria");
        const realistic = formData.get("realistic");

        addGoal({ goal, achievementCriteria, realistic });
    };


    return (
        <div className="w-11/12 mx-auto my-5 p-4 bg-white shadow-lg rounded-lg">
            {/* Catchy header */}
            <div className="text-center mb-5">
                <h1 className="text-4xl mb-10 mt-10 text-gray-800">Set Your Financial Goals</h1>
                <img className="w-1/2 h-auto" src="https://assets-global.website-files.com/61766c42e8e50c99a04fbd4b/6179a87367a4318b2a892cd0_SMART-goals.jpeg" alt="goal image" />
            </div>

            <div className="mb-10">
                <h2 className="text-2xl text-green-500 mb-5">How to Think About Goals:</h2>
                <ul className="list-disc pl-20">
                    {/* ... existing list items ... */}
                </ul>
            </div>
            <div className="mb-10">
                <h2 className="text-2xl text-green-500 mb-5">How to Set Goals:</h2>
                <ul className="list-disc pl-20">
                    {/* ... existing list items ... */}
                </ul>
            </div>

            {/* User input boxes */}
            <div className="mb-8">
                <h2 className="text-2xl text-green-500 mb-5">Tell Us About Your Goal</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block font-bold mb-5" htmlFor="goal">What is your goal?</label>
                        <input className="w-11/12 h-8 text-lg border border-gray-300 rounded" type="text" id="goal" name="goal" required />
                    </div>
                    <div className="mb-5">
                        <label className="block font-bold mb-5" htmlFor="achievementCriteria">How will you know you have achieved this goal?</label>
                        <input className="w-11/12 h-8 text-lg border border-gray-300 rounded" type="text" id="achievementCriteria" name="achievementCriteria" required />
                    </div>
                    <div className="mb-5">
                        <label className="block font-bold mb-5" htmlFor="realistic">How realistic is this goal for you?</label>
                        <select className="w-11/12 h-8 text-lg border border-gray-300 rounded" id="realistic" name="realistic" required>
                            <option value="">Select</option>
                            <option value="Very realistic">Very realistic</option>
                            <option value="Somewhat realistic">Somewhat realistic</option>
                            <option value="Not realistic">Not realistic</option>
                        </select>
                    </div>
                    <button className="bg-green-500 text-white py-2 rounded cursor-pointer" type="submit">Submit</button>
                </form>
            </div>
            <button className="bg-red-500 text-white py-2 rounded cursor-pointer" onClick={signUserOut}>
                Sign Out
            </button>
            {/* Display Goals */}
            <div className="mt-20">
                <h1 className="text-4xl mb-2">Your Goals:</h1>
                <ul className="list-none p-0">
                    {goals.map((goal) => (
                        <li key={goal.id} className="bg-gray-200 p-2 rounded mb-5">
                            <h3 className="m-0 text-2xl text-gray-800">Specific: {goal.goal}</h3>
                            <p className="mt-2 text-sm text-gray-600">Measurable: {goal.achievementCriteria}</p>
                            <p className="mt-2 text-sm text-gray-600">Achievable: {goal.realistic}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Goals;
