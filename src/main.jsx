import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./page/Home";
import AddRestaurant from "./page/AddRestaurant";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AddRestaurant />
  </StrictMode>
);
