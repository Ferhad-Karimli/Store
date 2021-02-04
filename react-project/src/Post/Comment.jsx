// import React from "react" ;
import style from './Comment.module.css'
import photo from '../Image/John.jpeg'





const Comment = (props) => {
 

    
return <div className={style.container} >
  
    <div className={style.info}>
    
    <div><img src={photo} alt="" style={{width: "50px",height: "40px", marginLeft:"20px"}} />  
     </div>
    <div className={style.detailed_info}>  
    <p>{props.comment}  </p>
  
    </div>
       </div>
       </div>






}

// export default Comment ;
