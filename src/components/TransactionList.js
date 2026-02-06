import { useEffect, useState } from "react";
import api from "../api";
import Filter from "./Filter";

export default function TransactionList() {
  const [list, setList] = useState([]);

  useEffect(()=>{ api.get("/").then(r=>setList(r.data)); },[]);

  const edit = async (tx) => {
    const amt = prompt("New amount", tx.amount);
    try {
      await api.put(`/edit/${tx._id}`, { amount:+amt });
      setList((await api.get("/")).data);
    } catch {
      alert("Edit restricted after 12 hours");
    }
  };

  return (
    <div className="section">
<h2>Transaction Analysis</h2>
<p style={{color:"#6b7280"}}>Filter and review your financial activity</p>
      <Filter setList={setList} />

      <table>
        <thead>
          <tr><th>Type</th><th>Amount</th><th>Category</th><th>Division</th><th>Action</th></tr>
        </thead>
        <tbody>
          {list.map(t=>(
            <tr key={t._id}>
<td>{t.type.charAt(0).toUpperCase() + t.type.slice(1)}</td>
              <td>₹{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.division}</td>
              <td><button onClick={()=>edit(t)}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
