import React, { useState } from "react";
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
    const handleAdd=()=>{
        const newStudent=[...student]
        newStudent.push({Name: "Ashutosh", Branch: "ECE", Relation: "Friends"});
        setstudent(newStudent);
    }
    const deleteItem = ()=>{
        let oldArray= [...student]
        let newStudent= oldArray.filter((v , i)=> v.Name !== i )
        setstudent(newStudent);
    }
    const updateItem = (v)=>{
        let oldArray= [...student]
        let newStudent= [];
        for (let i=0; i<oldArray.length; i++)
        {
        if (oldArray[i] === v){
            oldArray[i]="Friends";
        }}
        setstudent(newStudent);
    }
    return(
        <>
<h1>
    This is name of my friends:
</h1>
{student.map((v)=>{
    return(
        <>
            <ol>
            <li>Name: {v.Name}</li>
            <li>Branch: {v.Branch}</li>
            <li>Relation: {v.Relation}</li>
            <button type="button" onClick={()=>deleteItem()}>Delete Me</button>
            <br></br>
            <button type="button" onClick={()=> updateItem()}>Update Me</button>
            </ol>
            </>

    )
})}
<br></br>
<button type="button" onClick={()=>handleAdd()}> Add </button>
        </>
    )
}
export default Object;