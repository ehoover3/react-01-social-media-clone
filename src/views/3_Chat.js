import React from "react";
import SideBar from "../components/Sidebar/SideBar.js";
import CreateMessage from "../components/3_Chat/CreateMessage";
import MessageList from "../components/3_Chat/MessageList";
import { useStore } from "../store/store";

function Chat(props) {
  const booleanHideCreateMessage = useStore(
    (state) => state.booleanHideCreateMessage
  );

  return (
    <div className="App_ColumnContainer">
      <div className="App_ColumnLeft">
        {booleanHideCreateMessage ? <MessageList /> : <CreateMessage />}
      </div>
      <div className="App_ColumnRight">
        <SideBar />
      </div>
    </div>
  );
}
export default Chat;
