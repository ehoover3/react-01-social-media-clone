export const baseURL = "https://autumn-unexpected-surf.glitch.me";
//export const baseURL = "https://socialapp-api.heroku.com/"; // alternative API server

////////////////////////////////////////////////////////////////////////////////
// Table of Contents
////////////////////////////////////////////////////////////////////////////////

// ***AUTHENTICATION***
// POST   ​/auth​/login                Login user
// GET    ​/auth​/logout               Logout a user

// ***USERS***
// POST ​  /users                     Create a new user
// PATCH  ​/users​/{username}          Update user
// DELETE ​/users​/{username}          Delete user
// GET ​   /users                     Get a list of users
// GET ​   /users​/{username}          Get a user
// GET ​   /users​/{username}​/picture  Get a user's picture
// PUT ​   /users​/{username}​/picture  Set user's picture

// ***MESSAGES***
// GET    ​/messages                  Get a list of all messages
// GET    ​/messages                  Get a list of user messages
// POST   ​/messages                  Create a message
// GET    ​/messages​/{messageId}      Get a message
// DELETE /messages​/{messageId}      Delete a message

// ***LIKES***
// POST  ​ /likes                     Add Like
// DELETE ​/likes​/{likeId}            Remove Like

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// ***AUTHENTICATION***
////////////////////////////////////////////////////////////////////////////////

// // POST   ​/auth​/login                Login user
export const fetch_login = (username, password) => {
  return fetch(baseURL + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

// // GET    ​/auth​/logout               Logout a user
export const fetch_logout = (token) => {
  return fetch(baseURL + "/auth/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

////////////////////////////////////////////////////////////////////////////////
// ***USERS***
////////////////////////////////////////////////////////////////////////////////

// // POST ​  /users                     Create a new user
export const fetch_createUser = (username, password, displayName) => {
  return fetch(baseURL + "/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      displayName,
      password,
    }),
  }).then((res) => res.json());
};

// // PATCH  ​/users​/{username}          Update user
export const fetch_updateUser = (token, username, about) => {
  return fetch(baseURL + `/users/${username}`, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({about}),
  }).then((res) => res.json());
};

// // DELETE ​/users​/{username}          Delete user
// // TBD

// // GET ​   /users                     Get a list of users
export const fetch_getUsersNames = () => {
  return fetch(baseURL + "/users").then((res) => res.json());
};

// // GET ​   /users​/{username}          Get a user
export const fetch_getUser = (username) => {
  return fetch(baseURL + `/users/${username}`).then((res) => res.json());
};

// // GET ​   /users​/{username}​/picture  Get a user's picture
// unused
export const fetch_setPicture = (username, pictureData, token) => {
  return fetch(`${baseURL}/users/${username}/picture`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(pictureData),
  }).then((res) => res.json());
};

////////////////////////////////////////////////////////////////////////////////
// ***MESSAGES***
////////////////////////////////////////////////////////////////////////////////

// // GET    ​/messages                  Get a list of all messages
export const fetch_getAllMessages = () => {
  return fetch(baseURL + "/messages", {}).then((res) => res.json());
};

// // GET    ​/messages                  Get a list of user messages
export const fetch_getUserMessages = (username) => {
  return fetch(
    baseURL + "/messages?limit=100&username=" + username,
    {}
  ).then((res) => res.json());
};

// // POST   ​/messages                  Create a message
export const fetch_createMessage = (token, text, username) => {
  return fetch(baseURL + "/messages", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      username,
    }),
  }).then((res) => res.json());
};

// // GET    ​/messages​/{messageId}      Get a message
// // TBD

// // DELETE /messages​/{messageId}      Delete a message
export const fetch_deleteMessage = (token, messageId) => {
  return fetch(baseURL + "/messages/" + messageId, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });
};

////////////////////////////////////////////////////////////////////////////////
// ***LIKES***
////////////////////////////////////////////////////////////////////////////////

// // POST  ​ /likes                     Add Like
export const fetch_addLike = (token, messageId, username) => {
  return fetch(baseURL + "/likes", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messageId,
      username,
    }),
  }).then((res) => res.json());
};

// // DELETE ​/likes​/{likeId}            Remove Like
export const fetch_removeLike = (likedId) => {
  return fetch(baseURL + "/likes/" + likedId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};

// POST /friends/{username}             Add friend
export const fetch_addFriend = (username, friend) => {
  return fetch(baseURL + "/friends" + username, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      friend,
    }),
  }).then((res) => res.json());
};

// DELETE /friends/{username}          Remove friend
export const fetch_removeFriend = (username, friend) => {
  return fetch(baseURL + "/friends" + username, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      friend,
    }),
  }).then((res) => res.json());
};

// GET /friends/{username}            Get friends list
export const fetch_getFriends = (username) => {
  return fetch(baseURL + "/friends/" + username, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
