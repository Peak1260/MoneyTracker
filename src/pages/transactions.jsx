import { useState } from "react";
import { signOut } from "firebase/auth";
import { useAddTransaction } from "../hooks/useAddTransactions";
import { useGetTransaction } from "../hooks/useGetTransactions";
import { useNavigate } from "react-router-dom";

import { auth } from "../config/firebase";

export const Transactions = () => {
  const { addTransaction } = useAddTransaction();
  const { transactions, transactionTotals } = useGetTransaction();
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  const { balance, income, expenses } = transactionTotals;

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });

    setDescription("");
    setTransactionAmount("");
  };

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="expense-tracker mx-auto w-full bg-white rounded-lg shadow-md p-4 pt-16">
        <div className="container">
          <h1 className="text-center text-4xl text-gray-800 mb-4">Expense Tracker</h1>

          <div className="balance text-center my-5">
            <h3 className="text-lg text-gray-600">Your Balance</h3>
            {balance >= 0 ? (
              <h2 className="text-3xl text-green-500">${balance}</h2>
            ) : (
              <h2 className="text-3xl text-red-500">-${balance * -1}</h2>
            )}
          </div>

          <div className="summary flex flex-wrap justify-between items-center p-4 bg-gray-200 rounded-lg shadow-md">
            <div className="income w-full sm:w-1/2 text-center mb-4 sm:mb-0">
              <h4 className="text-lg text-gray-800">Income</h4>
              <p className="text-base text-gray-600">${income}</p>
            </div>
            <div className="expenses w-full sm:w-1/2 text-center">
              <h4 className="text-lg text-gray-800">Expenses</h4>
              <p className="text-base text-gray-600">${expenses}</p>
            </div>
          </div>

          <form
            className="add-transaction flex flex-wrap gap-4 items-center justify-center mt-12"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              placeholder="Description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 border border-gray-400 rounded-md bg-gray-100 text-gray-800 w-full sm:w-auto"
            />
            <input
              type="number"
              placeholder="Amount"
              value={transactionAmount}
              required
              onChange={(e) => setTransactionAmount(e.target.value)}
              className="p-2 border border-gray-400 rounded-md bg-gray-100 text-gray-800 w-full sm:w-auto"
            />
            <div className="flex items-center">
              <input
                type="radio"
                id="expense"
                value="expense"
                checked={transactionType === "expense"}
                onChange={(e) => setTransactionType(e.target.value)}
                className="mr-1"
              />
              <label htmlFor="expense" className="text-gray-800">Expense</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="income"
                value="income"
                checked={transactionType === "income"}
                onChange={(e) => setTransactionType(e.target.value)}
                className="mr-1"
              />
              <label htmlFor="income" className="text-gray-800">Income</label>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md p-2 text-lg hover:bg-green-600 transition duration-300"
            >
              Add Transaction
            </button>
          </form>
        </div>

        <button
          className="sign-out-button block mx-auto mt-5 bg-red-500 text-white p-2 rounded-md text-lg hover:bg-red-600 transition duration-300"
          onClick={signUserOut}
        >
          Sign Out
        </button>
      </div>

      <div className="transactions border border-gray-400 rounded-lg shadow-md p-5 my-5 bg-white text-center mx-auto">
        <h3 className="text-2xl mb-4">Transactions</h3>
        <ul className="list-none p-0 m-0">
          {transactions.map((transaction) => {
            const { description, transactionAmount, transactionType } = transaction;
            return (
              <li key={description} className="p-2 border-b border-gray-400 last:border-b-0">
                <h4 className="text-lg text-gray-800">{description}</h4>
                <p className="text-base text-gray-600">
                  ${transactionAmount} •{" "}
                  <label
                    className={`font-bold ${transactionType === "expense" ? "text-red-500" : "text-green-500"}`}
                  >
                    {transactionType}
                  </label>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
