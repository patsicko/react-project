import React from "react";
import Users from "../list-users/list-users";
import styles from "../list-users/list-users.module.css"

const Alert=(props)=>{

    const display=()=>{
        alert(props.name);
    }
    return(
       <>
      
      <div className={`${styles.card} ${styles.body}`}>
            <img src={props.url}/>
           
            <button onClick={display}>Click</button>
      
        </div>
    
       

    
       </>
    );
}

export default Alert;