import React, { useEffect, useState } from "react";
import axios from "../api";

function Dashboard() {

  const [summary, setSummary] = useState({
    income: 0,
    expense: 0,
    balance: 0
  });

  useEffect(() => {
    loadSummary();
  }, []);

  const loadSummary = async () => {
    try {
      const res = await axios.get("/summary?range=overall");
      setSummary(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>

      <div className="dashboard-header">
        <h2>Dashboard</h2>

        <select className="range-select">
          <option>Overall</option>
          <option>Month</option>
          <option>Week</option>
          <option>Year</option>
        </select>
      </div>

      <div className="cards">

        <div className="card income">
          Income ₹{summary.income}
        </div>

        <div className="card expense">
          Expense ₹{summary.expense}
        </div>

        <div className="card balance">
          Balance ₹{summary.balance}
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
