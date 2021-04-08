import React from "react";
import { ArrowUpCircle, Bricks } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import SideBar from "../components/Sidebar/SideBar.js";
import QuizMenu from "../components/2_Learn/QuizMenu.js";

function Learn(props) {
  return (
    <div className="App_ColumnContainer">
      <div className="App_ColumnLeft">
        <QuizMenu />
      </div>
      <div className="App_ColumnRight">
        <SideBar />
      </div>
    </div>
  );
}

export default Learn;
