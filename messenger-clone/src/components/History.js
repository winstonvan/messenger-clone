import React from "react";
import "../styles/History.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function History(props) {
  return (
    <div className="history">
      <div className="username">Winston Van</div>
      <Card
        className="message"
        style={{
          width: "fit-content",
          height: "fit-content",
        }}
      >
        <CardContent
          style={{
            paddingTop: "5px",
            paddingRight: "15px",
            paddingBottom: "5px",
            paddingLeft: "15px",
          }}
        >
          <Typography
            className="typography"
            variant="h5"
            component="h2"
            color="white"
          >
            {props.value}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default History;
