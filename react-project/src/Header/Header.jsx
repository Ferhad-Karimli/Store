import React from "react";
import style from "./Header.module.css";
import { FiMapPin, FiFacebook } from "react-icons/fi";
import { FcFeedback } from "react-icons/fc";
import photo from "../Image/John.jpeg";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
import { withRouter } from "react-router-dom";
const Header = (props) => {
  console.log(props);
  return (
    <div className={style.social_network}>
      <h2 className={style.springy_text}>Social Network</h2>
      <div className={style.container}>
        <div className={style.container_1}>
          <div className={style.name}>
            <img
              src={photo}
              className={style.image}
              width="50px"
              height="50px"
              alt=""
            />
          </div>
          <div>
            <p className={style.name}>John Wick </p>
          </div>
        </div>
        <div className={style.container_2}>
          <AiOutlineHome
            className={style.container_home}
            icon={AiOutlineHome}
            color="red"
            size="35px"
            hover="red"
            onClick={() => props.history.replace("/")}
          />
          <span className={style.icons}>
            <IoMdNotificationsOutline
              icon={IoMdNotificationsOutline}
              color="red"
              size="35px"
            />
          </span>
          <span className={style.icons}>
            <IoNewspaperOutline
              icon={IoNewspaperOutline}
              color="red"
              size="35px"
            />
          </span>
          <span className={style.icons}>
            <AiOutlineMessage
              className={style.container_home}
              icon={AiOutlineMessage}
              color="red"
              size="35px"
              hover="white"
              onClick={() => props.history.replace("/message")}
            />
          </span>
        </div>

        <div className={style.container_3}>
          <div className={style.search_box}>
            <input
              type="text"
              className={style.search_txt}
              name=""
              placeholder="Type to search"
            />
            <a className={style.search_btn} href="#">
              <FcSearch icon={FcSearch} color="red" size="35px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
