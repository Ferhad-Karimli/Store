import React from "react";
import { withRouter } from "react-router-dom";
import {
  addMessageAction,
  updateMessageAction,
  getMessages,
  getMessagesByUserIdAction,
} from "../redux/actions";
import Message from "./Message";
import { connect } from "react-redux";
import axios from "axios";
import { Component } from "react";

class MessagePageContainer extends Component {
  componentDidMount() {
    this.props.getMessages();
  }

  getMessagesByUserId = (id) => {
    this.props.getMessagesByUserIdAction(id);
  };

  sendMessage = (value, id) => {
    this.props.addMessage(value, id);
  };
  render() {
    console.log(this.props);

    let id = parseInt(this.props.match.params.id);
    let user = this.props.messages.find((user) => user.id === id);
    let arr = this.props.users;
    console.log("messagePageContainer", this.props);
    return (
      <>
        <Message
          users={this.props.users}
          messages={this.props.messages}
          dispatch={this.props.dispatch}
          changedMessages={this.props.changedMessages}
          isLoadingMsg={this.props.isLoadingMsg}
          //  handleClick={handleClick}
          // handleChange={(e) => this.props.updateMessage(e.target.value)}
          getMessagesByUserId={this.getMessagesByUserId}
          // handleclick hardan gelir?
          handleClick={(value) => this.sendMessage(value, id)}
          updateMessage={this.props.updateMessage}
          addMessage={this.props.addMessage}
          disableInput={this.props.disableInput}
          user={user}
          arr={arr}
          id={id}
        />
      </>
    );
  }
}

let mapsStateToProps = (state) => {
  console.log("Look", state);
  return {
    users: state.messagesPage.users,
    messages: state.messagesPage.messages,
    changedMessages: state.messagesPage.changedMessages,
    isLoadingMsg: state.messagesPage.isLoadingMsg,
    disableInput: state.messagesPage.disableInput,
  };
};

let mapsDispatchToProps = (dispatch) => {
  return {
    updateMessage: (text) => dispatch(updateMessageAction(text)),
    addMessage: (value, id) => dispatch(addMessageAction(value, id)),
    getMessages: (users) => dispatch(getMessages(users)),
    getMessagesByUserIdAction: (name) =>
      dispatch(getMessagesByUserIdAction(name)),
  };
};

export default connect(
  mapsStateToProps,
  mapsDispatchToProps
)(withRouter(MessagePageContainer));
