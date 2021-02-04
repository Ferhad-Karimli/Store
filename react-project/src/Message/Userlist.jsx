import React from "react";
import "./message.css";
import { withRouter } from "react-router-dom";
import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";

// {()=>props.history.replace('/profile')}
const UserList = (props) => {
  return (
    <div className="userlist_container">
      <ul>
        <li>
          {" "}
          <Link
            to={`/message/${props.id}`}
            onClick={() => props.getMessagesByUserId(props.id)}
          >
            {props.users} {props.last}{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(UserList);
