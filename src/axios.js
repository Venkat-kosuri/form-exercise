import axios from "axios";

export const axiosPrivate = axios.create({
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer 9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28`,
  },
});

export default axiosPrivate;
