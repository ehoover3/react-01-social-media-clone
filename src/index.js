import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./App.css";
import "./components.css";
import "./Dunya.css";
import "./Eric.css";
import "./Ibe.css";
import "./Ryan.css";
import "./components/Navigation/Navigation.css";
import "./components/Sidebar/Sidebar.css";
import "./components/0_LoginPage/LoginPage.css";
import "./components/1_Home/Home.css";
import "./components/2_Learn/Learn.css";
import "./components/3_Chat/Chat.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/LifeSkills">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
