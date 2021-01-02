import "./App.css";
import db from "./components/Database";
import History from "./components/History";
import SendIcon from "@material-ui/icons/Send";
import React, { useState } from "react";
import { FormControl, Input, InputLabel, IconButton } from "@material-ui/core";

function App() {
  const username = "Winston";

  // states
  const [input, setInput] = useState(""); // text field state
  const [messages, setMessages] = useState([]); // messages state stored in an array

  // set text field
  const setInputField = (event) => {
    setInput(event.currentTarget.value);
  };

  // send message
  const sendMessage = (event) => {
    event.preventDefault(); // prevent refreshing
    setMessages(messages.concat(input)); // messages += new message
    setInput(""); // clear text field
  };

  const send = (event) => {
    event.preventDefault();

    db.collection("users").add({
      loginInfo: "hi",
    });
  };

  return (
    <div className="App">
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
              onClick={send}
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

export default App;
