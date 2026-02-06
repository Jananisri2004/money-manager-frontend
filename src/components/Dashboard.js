import { useEffect, useState } from "react";
import api from "../api";

export default function Dashboard() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const load = async (range="all") => {
    const res = await api.get(`/summary?range=${range}`);
    setIncome(res.data.income);
    setExpense(res.data.expense);
  };

  useEffect(() => { load(); }, []);

  return (
    
    <>
    <div className="top-bar">
  <h2>Dashboard</h2>
  <select onChange={e => load(e.target.value)}>
    <option value="all">Overall</option>
    <option value="month">This Month</option>
    <option value="week">This Week</option>
    <option value="year">This Year</option>
  </select>
</div>

      <div className="cards">
        <div className="card income">Income ₹{income}</div>
        <div className="card expense">Expense ₹{expense}</div>
        <div className="card balance">Balance ₹{income-expense}</div>
      </div>
    </>
  );
}
