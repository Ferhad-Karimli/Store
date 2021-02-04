// import React from "react";
import React, { useReducer } from "react"
import style from "./Info.module.css"
import { FcLike,FcIdea,FcShare} from "react-icons/fc";
import { GrLike } from "react-icons/gr";


 
function reducer (state,action){

switch(action.type){
case "increment":
return state + 1;
case "incremen":
return state +1;
case "decrement":
return state - 1;
default:
return state

  }
 }

const Info = (props) => {
    console.log(props.news)
  let data = 0
    

   
  const [count,dispatch]= useReducer(reducer,0)
  const [counter]= useReducer(reducer,2)
 

    return (
            
            <div className={style.container}>
<div className={style.subcontainer}>
    <div className={style.comment}>
      <p>{props.news}</p>
  

    </div>

    <div className={style.reaction}>
   
    <FcLike  onClick={() => dispatch({type:"increment"})}/>{count}  
    <FcIdea  onClick={() => dispatch({type:"incremen"})}/>{counter}  
   <GrLike onClick={() =>   dispatch({type:"increment"})}/>{count}  


    </div>





        
       

      </div>
      </div>
      
    )
}




  export default  Info;