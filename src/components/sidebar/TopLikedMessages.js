import React, { useState, useEffect } from "react";
import { STORE_GET_TOP_LIKED_MESSAGES, useStore } from "../../store/store";
import { fetch_getAllMessages } from "../../fetchRequests";
import Message from "../3_Chat/Message";

import { Accordion, Button, Card } from "react-bootstrap";

function TopLikedMessages() {
  const dispatch = useStore((state) => state.dispatch);
  const topLikedMessages = useStore((state) => state.topLikedMessages);

  function getTopLikedMessages() {
    fetch_getAllMessages().then((messageList) => {
      messageList.messages
        .sort((a, b) => b.likes.length - a.likes.length)
        .splice(10, messageList.messages.length);

      dispatch({
        type: STORE_GET_TOP_LIKED_MESSAGES,
        payload: messageList,
      });
    });
  }

  useEffect(() => {
    getTopLikedMessages();
  }, []);

  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Top Liked Messages
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <section>
              {/* CONDITIONAL RENDERING: if messages.messages exists, run map function */}
              {topLikedMessages.messages &&
                topLikedMessages.messages.map((message) => (
                  <Message
                    likes={message.likes.length}
                    key={message.id}
                    messageId={message.id}
                    text={message.text}
                    username={message.username}
                    createdAt={message.createdAt}
                    id={message.id}
                    likeArray={message.likes}
                    getMessages={getTopLikedMessages}
                    Message_Return={"TopLikedMessages"}
                  />
                ))}
            </section>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default TopLikedMessages;
