import React from "react";
import "../styles/History.css";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";

function History(props) {
  return (
    <div className="history">
      <Card
        className="message"
        variant="raised"
        style={{
          borderRadius: "0.9em",
          width: "fit-content",
          height: "fit-ceontent",
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
