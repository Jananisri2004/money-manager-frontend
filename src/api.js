import axios from "axios";

export default axios.create({
  baseURL: "https://money-manager-backend-ps65.onrender.com/api/transactions"
});
