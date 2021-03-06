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

export function ListMessages(props) {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);
  const userMessages = useStore((state) => state.messages);
  // const [dropDownText, setDropDownText] = useState("ALL");
  const booleanHideCreateMessage = useStore(
    (state) => state.booleanHideCreateMessage
  );

  useEffect(() => {
    fetch_getAllMessages().then((messageList) => {
      dispatch({ type: STORE_GET_ALL_MESSAGES, payload: messageList });
    });
  }, [booleanHideCreateMessage]);

  function getAllMessages() {
    fetch_getAllMessages().then((messageList) => {
      dispatch({ type: STORE_GET_ALL_MESSAGES, payload: messageList });
    });
  }
  function getUserMessages() {
    fetch_getUserMessages(user.username).then((messageList) => {
      dispatch({ type: STORE_GET_USER_MESSAGES, payload: messageList });
    });
  }
  // function getDirectMessages() {}
  // function getChatroom1Messages() {}
  // function getChatroom2Messages() {}
  // function getChatroom3Messages() {}

  console.log(userMessages);

  return (
    <>
      <section className="MessageList_NavigationBar">
        <div className="MessageList_DropDown">
          {/* <Dropdown>
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
            </Dropdown.Menu>
          </Dropdown> */}

          {/* <Button variant="light" disabled>
            {dropDownText}
          </Button> */}
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
        {userMessages &&
          userMessages
            // .sort((a, b) => a.createdAt - b.createdAt)
            .map((message) => (
              <Message
                likes={message.like.length}
                key={message._id}
                text={message.text}
                username={message.username}
                createdAt={message.createdAt}
                id={message._id}
                likeArray={message.like}
                getMessages={getAllMessages}
                Message_Return={"MessageList"}
              />
            ))
            .reverse()}
      </section>
    </>
  );
}

export default ListMessages;
