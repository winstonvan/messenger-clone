import "../styles/Chat.css";
import History from "../components/History";
import SendIcon from "@material-ui/icons/Send";
import React, { useState, useEffect } from "react";
import { FormControl, Input, InputLabel, IconButton } from "@material-ui/core";
import db from "./Database";

function Chat(props) {
  const username = props.location.state.username;
  // states
  const [input, setInput] = useState(""); // text field state
  const [messages, setMessages] = useState([]); // messages state stored in an array

  // set text field
  const setInputField = (event) => {
    setInput(event.currentTarget.value);
  };

  // populate chat

  useEffect(() => {}, []);

  // send message
  const sendMessage = (event) => {
    event.preventDefault(); // prevent refreshing
    setMessages(messages.concat(input)); // messages += new message
    console.log(messages);

    // push database data to postData[]
    const postData = [];
    db.collection("users").onSnapshot((snapshot) => {
      snapshot.forEach((doc) => postData.push({ id: doc.id, ...doc.data() }));
    });

    // find doc id from username
    setTimeout(function () {
      for (var i = 0; i < postData.length; i++) {
        var user = postData[i].username.username;
        var id = postData[i].id;

        if (user === username) {
          db.collection("users").doc(id).update({
            message: messages,
          });
        }
      }
      setInput(""); // clear text field
    }, 100);
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
              message //"message" variable is used to map all strings in "messages" array
            ) => (
              <History username={username} message={message} />
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
              onChange={(event) => {
                setInputField(event, input);
              }}
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
