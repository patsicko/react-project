import React from "react";
 import ListUsers from "./components/list-users/list-users";
import styles from "./app.module.css";
 import Alert from "./components/alert-users/alert";


const App=()=>{


  return(
    <>
     <div className={styles.main} >

     <div className={styles.list}>
      
      <ListUsers/> 
      </div>

     <div className={styles.alert}>
     <Alert/>
     </div> 
    

     </div>
 
  
    </>

    
  );


}

export default App;