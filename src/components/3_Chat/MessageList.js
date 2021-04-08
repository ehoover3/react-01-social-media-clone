import React, { useState, useEffect } from "react";
import { Button, Dropdown, Nav } from "react-bootstrap";
import {
  useStore,
  STORE_GET_ALL_MESSAGES,
  STORE_GET_USER_MESSAGES,
  STORE_FLIP_HIDE_CREATE_MESSAGE,
} from "../../store/store";
import {
  fetch_getUserMessages,
  fetch_getAllMessages,
} from "../../fetchRequests";
import Message from "./Message";

export function MessageList(props) {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);
  const userMessages = useStore((state) => state.messages);
  const [dropDownText, setDropDownText] = useState("ALL");
  const booleanHideCreateMessage = useStore(
    (state) => state.booleanHideCreateMessage
  );

  useEffect(() => {
    fetch_getAllMessages(user.username).then((messageList) => {
      dispatch({ type: STORE_GET_ALL_MESSAGES, payload: messageList });
    });
  }, []);

  function getAllMessages() {
    fetch_getAllMessages(user.username).then((messageList) => {
      dispatch({ type: STORE_GET_USER_MESSAGES, payload: messageList });
    });
  }

  function getUserMessages() {
    fetch_getUserMessages(user.username).then((messageList) => {
      dispatch({ type: STORE_GET_USER_MESSAGES, payload: messageList });
    });
  }

  function getDirectMessages() {}
  function getChatroom1Messages() {}
  function getChatroom2Messages() {}
  function getChatroom3Messages() {}

  return (
    <>
      <section className="MessageList_NavigationBar">
        <div className="MessageList_DropDown">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onSelect={getAllMessages}
                onClick={() => setDropDownText("ALL")}
              >
                ALL
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={getUserMessages}
                onClick={() => setDropDownText("USER")}
              >
                USER
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropDownText("DM's")}>
                DM's
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropDownText("CHATROOM 1")}>
                CHATROOM 1
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropDownText("CHATROOM 2")}>
                CHATROOM 2
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropDownText("CHATROOM 3")}>
                CHATROOM 3
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button variant="light" disabled>
            {dropDownText}
          </Button>
        </div>

        <Button
          variant="success"
          type="submit"
          onClick={() => {
            dispatch({
              type: STORE_FLIP_HIDE_CREATE_MESSAGE,
              payload: !booleanHideCreateMessage,
            });
          }}
        >
          CREATE MESSAGE
        </Button>
      </section>

      <section>
        {userMessages.messages &&
          userMessages.messages.map((message) => (
            <Message
              likes={message.likes.length}
              key={message.id}
              text={message.text}
              username={message.username}
              createdAt={message.createdAt}
              id={message.id}
              likeArray={message.likes}
              getMessages={getAllMessages}
              Message_Return={"MessageList"}
            />
          ))}
      </section>
    </>
  );
}

export default MessageList;
