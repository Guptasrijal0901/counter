import { useState } from "react";
const Level = ()=>{
    const [count, setCount] = useState(0);
    let Level="";
    console.log(Level);
    if (count<5){
        Level="low";
    }
    else if (count >= 5 && count <50){
        Level="medium";
    }
    else (count > 50 )
    { Level="high";
}
function increment() {
    setCount(count + 1);
}
const decrement= ()=>{
    setCount(count-1)
}
const getDisplayText= ()=>{
    
}
return(
<>
    <div className="level"> This is level {getDisplayText}<div/>
    <div className="count"> This is count {useState}</div>
    <div><button onClick={increment()}>increment</button>
    <button onClick={decrement()}>decrement</button></div>
</>
);
};

export default Level;
