import { useState } from "react";
import api from "../api";

export default function AddTransaction() {
  const [form, setForm] = useState({
    type: "income",
    amount: "",
    category: "",
    division: "Personal",
    date: ""
  });

  const submit = async () => {
    await api.post("/", form);
    window.location.reload();
  };

  return (
    <div className="section">
  <h2>Add Transaction</h2>

  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
    <input placeholder="Amount" onChange={e=>setForm({...form,amount:+e.target.value})}/>
    <select onChange={e=>setForm({...form,type:e.target.value})}>
      <option>Income</option>
      <option>Expense</option>
    </select>

    <input placeholder="Category (e.g. Food, Fuel)" onChange={e=>setForm({...form,category:e.target.value})}/>
    <select onChange={e=>setForm({...form,division:e.target.value})}>
      <option>Personal</option>
      <option>Office</option>
    </select>
  </div>

  <div style={{ marginTop: "12px", display: "flex", gap: "10px" }}>
    <input type="date" onChange={e=>setForm({...form,date:e.target.value})}/>
    <button onClick={submit}>Add Transaction</button>
  </div>
</div>
  );
}
