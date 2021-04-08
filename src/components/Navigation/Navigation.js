import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";
import {
  Chat,
  Gem,
  HouseFill,
  Intersect,
  PersonCircle,
  Stars,
} from "react-bootstrap-icons";
import { fetch_getUser } from "../../fetchRequests";
import { Button, Nav } from "react-bootstrap";

function Navigation(props) {
  const gems = useStore((state) => state.gems);
  const authUser = useStore((state) => state.user);
  const [count, setCount] = useState(0);
  const [myUser, setMyUser] = useState({});
  const [about, setAbout] = useState("");
  const [displayName, setDisplayName] = useState("");

  console.log(authUser);

  useEffect(() => {
    fetch_getUser(authUser.username).then((data) => {
      setMyUser(data.user);
      setAbout(data.user.about);
      setDisplayName(data.user.displayName);
    });
  }, [props.match, count]);

  return (
    <>
      <div className="Nav_Bar">
        {/* LEFT SIDE */}
        <Button variant="light" disabled>
          <Intersect /> LIFE SKILLS{" "}
        </Button>
        <div className="Nav_Bar_LeftSide">
          <Nav
            variant="pills"
            className="justify-content-center"
            defaultActiveKey="0"
          >
            <Nav.Item>
              <Nav.Link eventKey="0" as={Link} to="/Home">
                <HouseFill /> HOME
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="1" as={Link} to="/Learn">
                <Stars /> LEARN
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" as={Link} to="/Chat">
                <Chat /> CHAT
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        {/* RIGHT SIDE */}
        <div className="Nav_Bar_RightSide">
          <Button variant="light" disabled>
            <PersonCircle /> {displayName}
          </Button>

          <Button variant="light" disabled>
            <Gem /> {gems}
          </Button>
        </div>
      </div>
      <div className="Nav_SpaceVertical"></div>
    </>
  );
}

export default Navigation;
