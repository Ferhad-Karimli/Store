import React, { Component } from "react";
import "./message.css";
import UserList from "../Message/Userlist";
import photo from "../Image/John.jpeg";
import User_mes from "./User_mes";
import { withRouter } from "react-router-dom";
import Loader from "../comman/Loader";

class Message extends Component {
  state = {
    msg_content: "",
  };

  render() {
    console.log(this.props.messages, "msg");
    // let id = parseInt(props.match.params.id);
    // if (this.props.messages.length === 0) return <Loader />;
    return (
      <div className="message_container">
        <div className="username">
          {this.props.arr.map((el, i) => (
            <UserList
              key={i}
              users={el.first_name}
              last={el.last_name}
              id={el.id}
              getMessagesByUserId={this.props.getMessagesByUserId}
            />
          ))}
        </div>

        <div className="user_comment">
          <div className="image_comment">
            <div className="user_image">
              <img src={photo} className="user_image_photo" alt="" />
            </div>

            {!this.props.isLoadingMsg ? (
              <div className="user_messages">
                {/* {this.props.user ? (
        this.props.user.userMessages.map((el, i) => (
          <User_mes key={i} messages={el.msg_content} */}
                {this.props.messages.length > 0 &&
                  this.props.messages.map((el, i) => (
                    <User_mes key={i} messages={el.msg_content} />
                  ))}
              </div>
            ) : (
              <Loader />
            )}

            <div></div>
          </div>
          <span className="buttoons_bottom">
            <div className="text_btn">
              <input
                type="text"
                className="text"
                onChange={(e) => this.setState({ msg_content: e.target.value })}
                value={this.state.msg_content}
              />

              <button
                // onclickin icinedeki value hardan gelir?
                onClick={() => {
                  this.props.handleClick(this.state.msg_content);
                  this.setState({ msg_content: "" });
                }}
                className="btn_but"
                disabled={this.props.disableInput}
              >
                Send Message
              </button>
              <button
                onClick={() => this.props.history.replace("/")}
                className="btn_but"
              >
                Go to Profile
              </button>
            </div>
          </span>
        </div>
      </div>
    );
  }
}

// let  data= {[e.target.name]:e.target.value}

// const handleChange = (e) => {

//   let action = updateMessageAction(e.target.value)
//   props.dispatch(action)
// let value =  e.target.value
// props.dispatch({
//   type:"CHANGE_MESSAGE",
//   value
// })
// state.messages.push({id:id,msg:value})

export default withRouter(Message);
