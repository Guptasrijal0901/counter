import React, { useState } from "react";
// import App from "./Hooks";

const App=()=>{
    let newTime = new Date().toLocaleTimeString();
    const [cTime, setTime] = useState(newTime); // [current value, updated value]
     
    const updateTime=()=>{
        newTime= new Date().toLocaleTimeString();
        setTime(newTime);
    }
    return(
        <>
<h1> {cTime} </h1>
<button onClick={updateTime}> Get Time</button>
        </>
    );
}
export default App;