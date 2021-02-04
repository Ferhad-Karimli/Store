import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { FcFeedback, FcInfo, FcMindMap, FcSettings } from "react-icons/fc";

const Navbar = () => {
  return (
    <div className={style.container}>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName={style.active}>
            {" "}
            Profile
          </NavLink>
          <FcInfo />
        </li>
        <li>
          <NavLink to="/news" activeClassName={style.active}>
            News{" "}
          </NavLink>{" "}
          <FcMindMap />
        </li>
        <li>
          <NavLink to="/message" activeClassName={style.active}>
            Message
          </NavLink>
          <FcFeedback />
        </li>

        <li>
          {" "}
          <NavLink to="/setting" activeClassName={style.active}>
            Friends
          </NavLink>
          <FcSettings />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
