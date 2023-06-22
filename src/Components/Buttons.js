import { useState } from "react";
const Buttons =()=>{
    const [counter, setcounter]= useState(0);
    let level = "";
    console.log("level");
    if(counter<5){
        level= "Low";
    }
    else if (counter>= 5 && counter< 50){
        level = "Medium";
    }
    else {
        level= "High"
    }

return(
<><div className="box">
<div>
<h1 className="level"> This is level:{level}</h1></div>
<div> <br></br>
<br></br>
<h1 className="number">This is number:{counter} </h1></div>
<div>
<br></br>
<br></br>
<button  className="btn1" onClick={()=> setcounter(counter +1)}>Increment</button>
<br></br>
<button  className="btn2" onClick={()=> setcounter(counter -1)}>Decrement</button>
</div>
</div>
</>
)
};
export default Buttons;
