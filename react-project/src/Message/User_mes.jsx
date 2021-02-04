import React from "react";
import "./message.css";
import { withRouter } from "react-router-dom";
import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";

// {()=>props.history.replace('/profile')}
const User_mes = (props) => {
  console.log("Check", props);
  return (
    <div className="user_message_post">
      <p>{props.messages} </p>
    </div>
  );
};

export default User_mes;
