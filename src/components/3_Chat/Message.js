import React from "react";
import { Trash, HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons";
import { useStore, STORE_ADD_LIKE, STORE_REMOVE_LIKE } from "../../store/store";
import {
  fetch_deleteMessage,
  fetch_addLike,
  fetch_removeLike,
} from "../../fetchRequests";

function Message(props) {
  const dispatch = useStore((state) => state.dispatch);
  const authUser = useStore((state) => state.user);
  const { id } = props;
  const { likeArray } = props || [];
  const likedId = (props) => {
    const likeId = likeArray.filter(
      (like) => authUser.username === like.username
    );
    if (likeId.length === 1) {
      return likeId[0].id;
    }
    return null;
  };

  function handleAddLike() {
    fetch_addLike(authUser.token, id)
      .then(() => {
        props.getMessages();
      })
      .then((messages) => {
        dispatch({ type: STORE_ADD_LIKE, payload: messages });
      });
  }

  function handleRemoveLike() {
    fetch_removeLike(authUser.token, likedId())
      .then(() => {
        props.getMessages();
      })
      .then((messages) => {
        dispatch({ type: STORE_REMOVE_LIKE, payload: messages });
      });
  }

  if (props.Message_Return === "MessageList") {
    return (
      <>
        <p></p>
        <div className="Message1_Message">
          {/* LEFT SIDE OF THE LINE */}
          <div>
            <span className="Message1_Bold">{props.username} </span>
            <span>{props.text}</span>
          </div>

          {/* RIGHT SIDE OF THE LINE */}
          <div>
            {/* TRASH BUTTON CONDITIONALLY RENDERS */}
            {props.username === authUser.username && (
              <button
                className="Message1_Button"
                onClick={() =>
                  fetch_deleteMessage(authUser.token, id).then(() => {
                    props.getAllOfMessages();
                  })
                }
              >
                <Trash />
              </button>
            )}
            {/* LIKE BUTTON */}
            <button className="Message1_Button" onClick={handleAddLike}>
              <HandThumbsUp />
            </button>
            {/* LIKES COUNT */}
            {props.likes}
            {/* REMOVE LIKE BUTTON */}
            <button className="Message1_Button" onClick={handleRemoveLike}>
              <HandThumbsDown />
            </button>
            <p></p>
          </div>
        </div>
      </>
    );
  } else if (props.Message_Return === "TopLikedMessages") {
    return (
      <div className="Message2_Container">
        <div className="Message2_Center Message2_Bold">{props.username}</div>
        <div className="Message2_Center">{props.text}</div>
        <div className="Message2_Center">
          <button className="Message2_Button" onClick={handleAddLike}>
            <HandThumbsUp />
          </button>
          {props.likes}
          <button className="Message2_Button" onClick={handleRemoveLike}>
            <HandThumbsDown />
          </button>
        </div>
      </div>
    );
  }
}

export default Message;
