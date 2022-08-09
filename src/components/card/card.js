import React from "react";
import styles from "../list-users/list-users.module.css";

const Card=(props)=>{


    return(

        <div className={`${styles.card} ${styles.body}`}>
            <img src={props.url}/>
           
    
      
        </div>
    );
}

export default Card;