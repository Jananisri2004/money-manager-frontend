import axios from "axios";

export default axios.create({
    baseURL: "https://your-backend-name.onrender.com/api/transactions"
});
