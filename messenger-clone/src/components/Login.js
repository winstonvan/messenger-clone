import "../styles/Login.css";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";

import "firebase/auth";
import db from "../components/Database";

// login / create user

function Login(props) {
  const [username, setUsername] = useState(""); // username field state
  const [password, setPassword] = useState(""); // password field state

  // set username field
  const setUsernameField = (event) => {
    setUsername(event.currentTarget.value);
  };

  // set password field
  const setPasswordField = (event) => {
    setPassword(event.currentTarget.value);
  };

  const register = (event) => {
    db.collection("users").add({
      username: { username },
      password: { password },
    });

    return;
  };

  const login = (event) => {
    props.history.push({
      pathname: "/chat",
      state: { username: username },
    });
  };

  const startLogin = (event) => {
    event.preventDefault(); // prevent refreshing
    const postData = [];

    // push database data to postData[]
    db.collection("users").onSnapshot((snapshot) => {
      snapshot.forEach((doc) => postData.push({ ...doc.data() }));
    });

    setTimeout(function () {
      console.clear();
      console.log(postData);

      console.log(
        "Searching database(" + postData.length + ") for: " + username
      );

      if (postData.length === 0) {
        console.log("No accounts in database. Registering account.");
        register();
        login();
        return;
      }

      // find user/pass combination in postData[]
      for (var i = 0; i < postData.length; i++) {
        var user = postData[i].username.username;
        var pass = postData[i].password.password;

        if (user === username) {
          console.log("Found matching username. Checking password...");

          if (pass === password) {
            console.log("Password matches.");
            login();
            return;
          } else {
            console.log("Password does not match.");
          }
        } else if (i === postData.length - 1) {
          console.log("User does not exist. Registering account.");
          register();
          login();
          return;
        } else {
          console.log("Username doesn't match. Trying next...");
        }
        console.log("______________________");
      }
    }, 1000);
  };

  return (
    <div className="login__container">
      <div className="login__title">Welcome</div>

      <form>
        <div className="login">
          <TextField
            className="username"
            required
            label="Username"
            id="standard-required"
            onChange={(event) => setUsernameField(event, username)}
          />
          <TextField
            className="password"
            id="standard-password-input"
            required
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(event) => setPasswordField(event, password)}
          />
          <Button
            className="submit"
            variant="contained"
            color="primary"
            onClick={(event) => startLogin(event)}
          >
            Login
          </Button>
        </div>
      </form>

      <div className="instructions">
        Login using any unused login credentials to register an account.
      </div>
    </div>
  );
}

export default Login;
