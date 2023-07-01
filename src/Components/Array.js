import React, { useState } from "react";
const Array=()=>{
    const [toggle, settoggle]=useState(true)
const [name, setname]=useState([
    "Srijal",
    "Arya",
    "Priya",
    "Harsh",
    "Anish",
    "janhvi",
    "kajal"
]);
const deleteName= ()=>{
    setname(delete name[2]);
}
const suffle =()=>{
    if (toggle){
        setname(["Srijal", "Priya", "Arya", "Harsh", "Anish"])
    }
    else{
        setname([
        "Srijal",
        "Arya",
        "Priya",
        "Harsh",
        "Anish",
        "janhvi",
        "kajal"
    ])
    }
    settoggle(!toggle);
};

const empty=()=>{
    setname([]);
}
const addElement=()=>{
    let oldName= [...name];
    oldName.push("Sejal");
    oldName.push("Anjali");
    setname(oldName);
};
const removeElement = ()=>{
    let oldName= [...name];
    oldName.pop();
    oldName.pop("Anjali");
    setname(oldName);
};
// const addAll = ()=>([
//     "Srijal",
//     "Arya",
//     "Priya",
//     "Harsh",
//     "Anish",
//     "janhvi",
//     "kajal",
//     "Sejal",
//     "Anjali"
// ])
// setname(addAll);
return(
    <>
        <p>
            This is list of names:
        </p>
        <ol>
            <li>{name[0]}</li>
            <li>{name[1]}</li>
            <li>{name[2]}</li>
            <li>{name[3]}</li>
            <li>{name[4]}</li>
            <li>{name[5]}</li>
            <li>{name[6]}</li>
            <li>{name[7]}</li>
            <li>{name[8]}</li>
        </ol>
        <button onClick={()=>deleteName()} type="button"> Delete </button>
        <br></br>
        <button onClick={()=>suffle()} type="button"> Suffle </button>
        <br></br>
        <button onClick={()=>empty()} type="button"> Empty </button>
        <br></br>
        <button onClick={()=>addElement()} type="button"> Add </button>
        <br></br>
        <button onClick={()=>removeElement()} type="button"> Remove  </button>
        <br></br>
        {/* <button onClick={()=>addAll()} type="button"> Add All </button> */}
    </>
)
}
export default Array;