import { useEffect, useState } from "react";
import api from "../api";

export default function CategorySummary() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/category-summary").then(res => setData(res.data));
  }, []);

  return (
    <div className="section">
<h2>Spending by Category</h2>
<p style={{color:"#6b7280"}}>Quick overview of where your money goes</p>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
  {data.map(item => (
    <tr key={item._id}>
      <td>{item._id}</td>
      <td style={{ fontWeight: "600" }}>₹{item.total}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}
