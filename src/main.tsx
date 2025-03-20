import { createRoot } from "react-dom/client";
import { Flowbite } from 'flowbite-react';
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Flowbite>
    <App />
  </Flowbite>
);
