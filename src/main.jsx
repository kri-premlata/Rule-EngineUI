import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import RuleProvider from "./utlis/RuleContext.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RuleProvider>
      <App />
    </RuleProvider>
  </BrowserRouter>
);
