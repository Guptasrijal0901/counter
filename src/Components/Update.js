import { useState } from "react";
const Object=()=>{
    const [student, setstudent]= useState([
        {Name: "Srijal", Branch: "ECE", Relation: "Friends"},
        {Name: "Ratan", Branch: "CH", Relation: "Friends"},
        {Name: "Megha", Branch: "ECE", Relation: "Friends"},
        {Name: "Astha", Branch: "ECE", Relation: "Friends"},
        {Name: "Rani", Branch: "ECE", Relation: "Friends"},
        {Name: "Anjali", Branch: "ECE", Relation: "Friends"},
        {Name: "Shreya", Branch: "ECE", Relation: "Friends"},
        {Name: "Harshita", Branch: "ECE", Relation: "Friends"},
        {Name: "Anish", Branch: "CS", Relation: "Friends"},
        {Name: "Harsh", Branch: "BCA", Relation: "Best Friends"},
    ])
    // add student 
    const handleAdd=()=>{
        const newStudent=[...student]
        newStudent.push({Name: "Ashutosh", Branch: "ECE", Relation: "Friends"});
        setstudent(newStudent);
    };
    // remove 
    const deleteItem = (c, i)=>{
        const oldArray= [...student];
        const newStudent= oldArray.filter((a , i)=> a !== c);
        setstudent(newStudent);
    };
    const updateItem = (c,i)=>{
        const oldArray= [...student];
        // const newStudent= [];
        for (let i=0; i<oldArray.length; i++){
        if (oldArray[i] === c){
            c.Relation="College Friend";
        }}
        setstudent(oldArray);
    };
    const updateAll=()=>{
    const oldArray= [...student];
    for (let b of oldArray){
        b.Relation="College Friends"
    }
    setstudent(oldArray);
    }
    return(
        <>
<h1>
    This is name of my friends:
</h1>
{student.map((c,i)=>{
    return(
        <>
            <ol>
            <li>Name: {c.Name}</li>
            <li>Branch: {c.Branch}</li>
            <li>Relation: {c.Relation}</li>
            <button type="button" onClick={()=>deleteItem(c, i)}>Delete Me</button>
            <br></br>
            <button type="button" onClick={()=> updateItem(c, i)}>Update Me</button>
            </ol>
            </>
    )
})}
<br></br>
<button type="button" onClick={()=>handleAdd()}> Add </button>
<button type="button" onClick={()=>updateAll()}>Update Me</button>
        </>
    )
}
export default Object;