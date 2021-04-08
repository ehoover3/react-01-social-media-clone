import React from "react";
import { ArrowUpCircle, Bricks } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function QuizMenu(props) {
  return (
    <>
      <div className="QuizMenu_Line">
        <Link to="/2_Learn/Quiz" className="">
          <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        </Link>
      </div>
      <div className="QuizMenu_Line">
        <Button variant="light" disabled>
          Dog Body Language
        </Button>
      </div>

      <div className="QuizMenu_Line">
        <div className="QuizMenu_FlexColumn">
          <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        </div>
        <div className="QuizMenu_FlexColumn">
          <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        </div>
      </div>

      <div className="QuizMenu_Line"></div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>

      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>

      <div className="QuizMenu_Line">
        <Bricks className="QuizMenu_Brick" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <Bricks className="QuizMenu_Brick" />
      </div>
    </>
  );
}

export default QuizMenu;
