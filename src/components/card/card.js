import React from "react";
import styles from "../../app.module.css";
const Card=(props)=>{
     


    return(
        <>
      <div className={styles.card}>
     <img src={props.src} alt=""/>
     
     <button onClick={()=>props.handleAction ? props.handleAction(props.name): {}} >{props.button}</button> <br/>
     
      </div>
     
        </>
    );
}

export default Card;