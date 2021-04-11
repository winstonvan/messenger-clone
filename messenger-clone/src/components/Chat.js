import "../styles/Chat.css";
import History from "../components/History";
import SendIcon from "@material-ui/icons/Send";
import React, { useState, useEffect } from "react";
import { FormControl, Input, InputLabel, IconButton } from "@material-ui/core";
import db from "./Database";
import firebase from "firebase";

function Chat(props) {
  // get username
  const username = props.location.state.username;

  // states
  const [input, setInput] = useState(""); // text field state
  const [messages, setMessages] = useState([{ username: "", message: "" }]); // messages state stored in an array

  // populate chat
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  // send message
  const sendMessage = (event) => {
    event.preventDefault(); // prevent refreshing

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput(""); // clear text field
  };

  return (
    <div className="Chat">
      <div className="header__container">
        <div className="content">
          <div className="title">Chat</div>
        </div>
        <div className="developer">Developed by Winston Van</div>
      </div>

      <div className="messages__container">
        <div className="messages">
          {/* MESSAGE HISTORY */}
          <div className="message__history">
            {messages.map((
              { id, message } //"message" variable is used to map all strings in "messages" array
            ) => (
              <History key={id} username={username} message={message} />
            ))}
          </div>
        </div>
      </div>

      <div className="form__container">
        {/* FORM */}
        <form className="form">
          <FormControl className="form__control">
            <InputLabel className="label" style={{ color: "#264653" }}>
              Aa
            </InputLabel>
            <Input
              className="input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <IconButton
              size="small"
              variant="contained"
              disabled={!input}
              type="submit"
              onClick={sendMessage}
              className="icon"
              style={{
                borderRadius: 0,
              }}
            >
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>
      </div>
    </div>
  );
}

export default Chat;
