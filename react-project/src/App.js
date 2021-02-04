import './App.css';
import Header from "./Header/Header"
import Navbar  from "./Navbar/Navbar"
import News  from "./News/News"
import { Route } from "react-router-dom";
import MessagePageContainer from './Message/MessagePageContainer';
import MainPageContainer from './Main/MainPageContainer'
import React, { Component } from 'react';


class App extends Component {

render(){
  return ( <div className="container">

<span className="main"> 
    <Route exact path='/' 
    component = {
    MainPageContainer  }/>  </span> 
    {/* // posts={props.state.profilePage.posts} 
    // dispatch={props.dispatch}  
    // updatedTextMessage={props.state.profilePage.updatedTextMessage}
    // userInfo={props.state.profilePage.userInfo} */}
    
<div className ="header"><Header/> </div>
<span className = "navbar"><Navbar/></span>
<span className="main">
<Route  path='/news' render = {() => 
    <News  news={this.props.state.newsPage.news}/>}/> </span> 

<div  className="main" >
 <Route path='/message/:id?' component = {
 MessagePageContainer  }/> </div>
{/* //  users={props.state.messagesPage.users} 
//  messages={props.state.messagesPage.messages}   
//  dispatch={props.dispatch}  
//  changedMessages={props.state.messagesPage.changedMessages} 
  */}

</div>
   
  );
}}

export default App;
