
import React, {useState,useEffect } from "react";

import Card from "../card/card";

const ListUsers=()=>{

const[user,setUser]=useState([]);

const fetchData= async()=>{
  const data= await(await fetch("https://api.github.com/users")).json();

setUser(data);

}
console.log(user);
 
const alertUser=(name)=>{
alert(name)
}
  return(

<>
<h1>List users</h1>


<Card src="https://random.imagecdn.app/500/150" button="details" />
{user.map(item=>(
  <Card src={item.avatar_url} handleAction={alertUser} name={item.login} button="details"/>
))}
<button type="button" onClick={fetchData}>Show users</button>
</>

  );
}

export default ListUsers;