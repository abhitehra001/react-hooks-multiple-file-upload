import axios from "axios";

export default axios.create({
  baseURL: "https://upload-images.onrender.com",
  headers: {
    "Content-type": "application/json",
  },
});
