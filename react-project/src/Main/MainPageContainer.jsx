import React from "react";
// import { withRouter } from "react-router-dom";
import {
  addPostAction,
  updatePostAction,
  getUsers,
  deletePostAction,
} from "../redux/actions";
import { connect } from "react-redux";
import Main from "./Main";
import { Component } from "react";
import axios from "axios";
import Loader from "../comman/Loader";

class MainPageContainer extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  handleChange() {
    console.log("handlecahange");
  }
  handleClick() {
    console.log("handle click");
  }

  render() {
    if (this.props.userInfo.length === 0) return <Loader />;
    console.log("mainPageContainer", this.props);
    return (
      <>
        <Main
          posts={this.props.posts}
          dispatch={this.props.dispatch}
          updatedTextMessage={this.props.updatedTextMessage}
          userInfo={this.props.userInfo}
          updatePost={this.props.updatePost}
          addPost={this.props.addPost}
          deletePost={this.props.deletePost}
        />
      </>
    );
  }
}

let mapsStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    updatedTextMessage: state.profilePage.updatedTextMessage,
    userInfo: state.profilePage.userInfo,
  };
};
let mapsDispatchToProps = (dispatch) => {
  return {
    updatePost: (text) => dispatch(updatePostAction(text)),
    addPost: () => dispatch(addPostAction()),
    getUsers: (data) => dispatch(getUsers(data)),
    deletePost: (e) => dispatch(deletePostAction(e)),
  };
};

export default connect(
  mapsStateToProps,
  mapsDispatchToProps
)(MainPageContainer);
