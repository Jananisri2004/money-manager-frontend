import { useState } from "react";
import api from "../api";

export default function Transfer() {
  const [from, setFrom] = useState("Move From");
  const [to, setTo] = useState("Move To");
  const [amount, setAmount] = useState("");

  const submit = async () => {
    if (!amount) {
      alert("Enter amount");
      return;
    }
    await api.post("/transfer", { from, to, amount: Number(amount) });
    alert("Transfer successful");
    setAmount("");
  };

  return (
<div className="section transfer-box">
  <div className="section-title">Account Transfer</div>
    <p style={{ color: "#6b7280" }}>Move money between your accounts</p>

  <div style={{ display: "grid", gap: "10px", maxWidth: "300px" }}>
    <select value={from} onChange={e=>setFrom(e.target.value)}>
      <option>Move From</option>
      <option>Cash</option>
      <option>Bank</option>
    </select>

    <select value={to} onChange={e=>setTo(e.target.value)}>
      <option>Move To</option>
      <option>Bank</option>
      <option>Cash</option>
    </select>

    <input
      type="number"
      placeholder="Amount"
      value={amount}
      onChange={e=>setAmount(e.target.value)}
    />

    <button onClick={submit}>Transfer</button>
  </div>
</div>


  );
}
