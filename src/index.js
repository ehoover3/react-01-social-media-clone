import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/0navigation/Navigation.css";
import "./components/0sidebar/Sidebar.css";
import "./components/1Login/Login.css";
import "./components/2Home/Home.css";
import "./components/3Grow/Grow.css";
import "./components/4Talk/Talk.css";
import "./components/5Play/Play.css";
import "./components/6User/User.css";
import "./components/0sidebar/DogPicsAPI.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/react_quizGame">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
