import React,{useState,useEffect} from 'react';
import Card from './card/card';


const Picsum=()=>{
const[picture,setPicture]=useState([]);

const fetchData=async()=>{
    const data=await (await fetch("https://picsum.photos/v2/list")).json();
    // console.log(data);
    setPicture(data)
    

}

useEffect(()=>{

    fetchData();
},[])

const displayPicsum=(name)=>{
    alert(name)
}

    return(
<>
{picture.map(item=>
  <Card src={item.download_url} name={item.author} handleAction={displayPicsum}  button={item.id}/>  
    )}
{/* <button onClick={fetchData}>picsum</button> */}
</>

    );
}
export default Picsum;
 