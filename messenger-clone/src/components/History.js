import React from "react";
import "../styles/History.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function History({ username, message }) {
  return (
    <div className="history">
      <div className={username === "123" ? `username` : `username__other`}>
        {username}
      </div>
      <div className={username === "123" ? `content` : `content__other`}>
        <Card
          className={username === "123" ? `message` : `message__other`}
          style={{
            width: "fit-content",
            height: "fit-content",
          }}
        >
          <CardContent
            className="card__content"
            style={{
              paddingTop: "5px",
              paddingRight: "10px",
              paddingBottom: "5px",
              paddingLeft: "10px",
            }}
          >
            <Typography
              className={
                username === "123" ? `typography` : `typography__other`
              }
              variant="h5"
              component="h2"
              color="white"
            >
              {message}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default History;
