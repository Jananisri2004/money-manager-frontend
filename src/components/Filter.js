import { useState } from "react";
import api from "../api";

export default function Filter({ setList }) {
  const [from,setFrom]=useState("");
  const [to,setTo]=useState("");
  const [cat,setCat]=useState("");

  const apply=async()=>{
    const r=await api.get(`/filter?from=${from}&to=${to}&category=${cat}`);
    setList(r.data);
  };

  const reset=async()=>{
    setList((await api.get("/")).data);
  };

  return (
    <>
    <div style={{ 
  display: "flex", 
  gap: "10px", 
  alignItems: "center",
  marginBottom: "12px"
}}></div>
      <label>From Date</label>
<input type="date" onChange={e=>setFrom(e.target.value)} />

<label>To Date</label>
<input type="date" onChange={e=>setTo(e.target.value)} />

      <input placeholder="Category" onChange={e=>setCat(e.target.value)}/>
      <button onClick={apply}>Apply</button>
<button className="secondary" onClick={reset}>Reset</button>

    </>
  );
}
