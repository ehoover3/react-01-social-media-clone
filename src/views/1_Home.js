import React, { useState, useEffect } from "react";
import SideBar from "../components/Sidebar/SideBar.js";
import { useStore } from "../store/store";
import {
  fetch_getUser,
  fetch_setPicture,
  fetch_updateUser,
} from "../fetchRequests";
import Photo from "../components/1_Home/Photo";
import About from "../components/1_Home/About";

function Home(props) {
  const authUser = useStore((state) => state.user);
  const [myUser, setMyUser] = useState({});
  const [about, setAbout] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [picture, setPicture] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch_getUser(authUser.username).then((data) => {
      setMyUser(data.user);
      setAbout(data.user.about);
      setDisplayName(data.user.displayName);
    });
  }, [props.match, count]);

  function handleSubmit(e) {
    e.preventDefault();
    const newUserInfo = {
      about,
      displayName,
    };
    fetch_updateUser(authUser.token, myUser.username, newUserInfo).then(
      (data) => {
        setMyUser(data.user);
      }
    );
  }

  function handleSubmitPhoto(event) {
    setCount((count) => count + 1);
    console.log("handle submit photo");
    fetch_setPicture(
      authUser.token,
      authUser.username,
      picture
    ).then((response) => console.log(response));
  }

  return (
    <div className="App_ColumnContainer">
      <div className="App_ColumnLeft">
        <Photo />
        <About />
      </div>
      <div className="App_ColumnRight">
        <SideBar />
      </div>
    </div>
  );
}

export default Home;
