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
                <p>Visualize your dreams, plan your future.</p>
                {/* Add your image here if desired */}
            </div>

            {/* Checklist */}
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
                        <label htmlFor="achievementCriteria">How will you know you've achieved it?</label>
                        <input type="text" id="achievementCriteria" name="achievementCriteria" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="realistic">How realistic is this goal to you?</label>
                        <select id="realistic" name="realistic" required>
                            <option value="">Select</option>
                            <option value="very">Very realistic</option>
                            <option value="somewhat">Somewhat realistic</option>
                            <option value="not">Not realistic</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>

            {/* Display Goals */}
            <div className="goals-list">
                <h2>Your Goals:</h2>
                <ul>
                    {goals.map((goal) => (
                        <li key={goal.id}>
                            <h3>{goal.goal}</h3>
                            <p>Achievement Criteria: {goal.achievementCriteria}</p>
                            <p>Realistic: {goal.realistic}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <button className="sign-out-button" onClick={signUserOut}>
                Sign Out
            </button>
        </div>
    );
};

export default Goals;
