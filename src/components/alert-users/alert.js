import React,{Fragment} from "react";
import Card from "../card/card";
import Picsum from "../picsum";





const Alert=(props)=>{





const display=(name)=>{
    alert(name);
}

    return(
<Fragment>
    <h1>Alert users</h1>
<Card src="https://random.imagecdn.app/500/150" name="flower" handleAction={display} button="alert" />
<Card src="https://tse3.mm.bing.net/th?id=OIP.Fl_iK0WBwmgXFeM6LHF09wHaEi&pid=Api&P=0"  button="alert"  name="city" handleAction={display} />

<Picsum/>


</Fragment>



    );
}

export default Alert;