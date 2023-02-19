import axios from "axios";

export default axios.create({
  baseURL: "https://node-upload-image.onrender.com",
  headers: {
    "Content-type": "application/json",
  },
});
