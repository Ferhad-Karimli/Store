
import React, { useReducer } from "react"
import style from "./Info.module.css"
import { FcLike,FcIdea,FcShare} from "react-icons/fc";
import { GrLike } from "react-icons/gr";
import Info from './Info'
import { withRouter } from 'react-router-dom';


 

const News = (props) => {
  
   console.log(props)


    return (
            
            <div className={style.container}>
 <Info news={props.news.map(el => el.comments)}/>
 <Info news={props.news.map(el => el.comments)}/>
 <Info news={props.news.map(el => el.comments)}/>
    
 
   <div className={style.button}>

   </div>
 
      </div>
      
    )
}




  export default  withRouter(News) ;