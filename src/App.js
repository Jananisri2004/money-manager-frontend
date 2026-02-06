import Dashboard from "./components/Dashboard";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import CategorySummary from "./components/CategorySummary";
import Transfer from "./components/Transfer";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <h1>Money Manager</h1>

      <Dashboard />
      <AddTransaction />
      <TransactionList />
      <div className="section insights">
  <CategorySummary />
  <Transfer />
</div>

    </div>
  );
}
