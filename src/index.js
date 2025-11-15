import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxrating={10} />
    <StarRating maxrating={5} color="red" size={36} />
    <StarRating maxrating={5} color="green" size={24} /> */}
  </React.StrictMode>
);
