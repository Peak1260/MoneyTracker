import React from "react";
import { useAddGoals } from "../hooks/useAddGoals";
import { useGetGoals } from "../hooks/useGetGoals";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import "../design/styleG.css";

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
        <div className="goals-container">
            {/* Catchy header */}
            <div className="goals-header">
                <h1>Set Your Financial Goals</h1>
                <img src="https://assets-global.website-files.com/61766c42e8e50c99a04fbd4b/6179a87367a4318b2a892cd0_SMART-goals.jpeg" alt = "goal image"></img>
            </div>

            <div className="goals-guideline">
                <h2>How to Think About Goals:</h2>
                <ul>
                    <li>The goal is the compass.</li>
                    <li>We all have have goals, even if we don't articulate them.</li>
                    <li>All our behavior is outcome-oriented.</li>
                    <li>Be honest about what you want.</li>
                    <li>Goals give you purpose.</li>
                </ul>
            </div>
            <div className="goals-checklist">
                <h2>How to Set Goals:</h2>
                <ul>
                    <li>Reflect on your financial aspirations.</li>
                    <li>Break down goals into achievable steps.</li>
                    <li>Set measurable targets and deadlines.</li>
                    <li>Regularly review and adjust your goals.</li>
                </ul>
            </div>

            {/* User input boxes */}
            <div className="goals-form">
                <h2>Tell Us About Your Goal</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="goal">What is your goal?</label>
                        <input type="text" id="goal" name="goal" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="achievementCriteria">How will you know you have achieved this goal?</label>
                        <input type="text" id="achievementCriteria" name="achievementCriteria" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="realistic">How realistic is this goal for you?</label>
                        <select id="realistic" name="realistic" required>
                            <option value="">Select</option>
                            <option value="Very realistic">Very realistic</option>
                            <option value="Somewhat realistic">Somewhat realistic</option>
                            <option value="Not realistic">Not realistic</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <button className="sign-out-button" onClick={signUserOut}>
                Sign Out
            </button>
            {/* Display Goals */}
            <div className="goals-list">
                <h1>Your Goals:</h1>
                <ul>
                    {goals.map((goal) => (
                        <li key={goal.id}>
                            <h3>Specific: {goal.goal}</h3>
                            <p>Measurable: {goal.achievementCriteria}</p>
                            <p>Achievable: {goal.realistic}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Goals;
