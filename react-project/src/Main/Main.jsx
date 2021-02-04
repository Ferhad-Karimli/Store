import React from "react";
import style from "./Main.module.css";
import Post from "../Post/Post";
import Personalinfo from "./Personalinfo";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { addPostAction, updatePostAction } from "../redux/actions/index";
import photo from "../Image/unnamed.jpg";
import picture from "../Image/inspirational.jpg";
import { FiMapPin } from "react-icons/fi";
import { Component } from "react";
import axios from "axios";
import Loader from "../comman/Loader";

class Main extends Component {
  // componentWillUnmount() {
  //   alert("Thank you for visiting");
  // }
  // componentDidUpdate(){
  //   alert("Loading")
  // }

  render() {
    console.log(this.props);

    return (
      <>
        <div className={style.main_container}>
          <div className={style.container}>
            <div>
              {" "}
              <img src={photo} alt="" className={style.image} />{" "}
            </div>
            <div className={style.info}>
              <div className={style.John_div_image}>
                <img
                  src={this.props.userInfo.photo}
                  alt=""
                  className={style.image_john}
                />
              </div>

              <div className={style.image_div_info}>
                <h1>
                  {this.props.userInfo.first_name}{" "}
                  {this.props.userInfo.last_name}{" "}
                </h1>
                <p>
                  {this.props.userInfo.city} <FiMapPin />
                </p>
                <p>Position:{this.props.userInfo.position}</p>
                <p>Education:{this.props.userInfo.education}</p>
                <p>Birthday:{this.props.userInfo.birthday}</p>
                <p>Email:{this.props.userInfo.email}</p>
              </div>
            </div>

            <div>
              <input
                onChange={(e) => this.props.updatePost(e.target.value)}
                className={style.text}
                type="text"
                value={this.props.updatedTextMessage}
                name=""
                id=""
              />

              <button
                onClick={() => this.props.addPost()}
                className={style.btn_but}
              >
                Add post
              </button>

              <button
                onClick={() => this.props.history.replace("/message")}
                className={style.btn_but}
                style={{ position: "absolute" }}
              >
                Go To Messages
              </button>
            </div>

            <div className={style.main_posts}>
              {this.props.posts
                .slice(0)
                .reverse()
                .map((el, i) => (
                  <Post
                    key={i}
                    posts={el.post}
                    id={el.id}
                    deletePost={this.props.deletePost}
                  />
                ))}
            </div>
          </div>

          <div className={style.button}></div>
        </div>
      </>
    );
  }
}

export default withRouter(Main);
