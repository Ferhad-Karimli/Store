import React from "react";
import style from "./Post.module.css";
import photo from "../Image/John.jpeg";
import { Component } from "react";
import { withRouter } from "react-router-dom";
// import Comment from './Comment'
class Post extends Component {
  state = {
    iscomplated: false,
    delete: " ",
    name: "ferhad",
  };
  // value = { thisupdatedTextMessage };

  render() {
    let deleteItem = (e) => {
      console.log(e.target.value);

      this.setState({ iscomplated: !this.state.iscomplated });

      if (e.target.value === "on") {
        let value = this.state.delete;
        this.setState({ iscomplated: !this.state.iscomplated });
      }
      this.props.deletePost(e.target.value);
    };
    console.log("Post", this.props);
    return (
      <div>
        <div className={style.container}>
          {/* { data.map( e =>  <Comment comment={e.comment}/>)} */}
          <div className={style.user_posts}>
            <div className="user_image">
              <img src={photo} className={style.image} width="30px" />{" "}
            </div>
            <div
              className={style.user_message}
              style={{
                textDecoration: this.state.iscomplated && "line-through",
              }}
            >
              <div className={style.name}></div>
              {this.props.posts} {this.props.id}
              <input
                // id={this.props.item.id}
                onClick={(e) => deleteItem(e)}
                type="checkbox"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Post);
