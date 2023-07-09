import React, { useState } from "react";
const Keep =()=>{
    const [inputList, setinputlist]=useState("");
    const [items , setitems]=useState([]);
    const itemEvents = (event)=>{
setinputlist(event.target.value);
    }
    const listOfItems = ()=>{
        setitems((oldItems)=>{
            return [...oldItems, inputList];
        });
    };
    return<>
<div className="main-div">
    <div className="center-div">
<br/>
<h1 className="name">List Your Friends </h1>
<br/>
<input  className="size" type = "text" placeholder="Add Friends" onChange={itemEvents}></input>
<br/>
<br/>

<button className="btn" onClick={listOfItems}> + </button>
<ol className="list">
    
    {items.map( (products)=>{
        return (<li>{products}</li>)
    })}
</ol>
    </div>
</div>

    </>
}
export default Keep;