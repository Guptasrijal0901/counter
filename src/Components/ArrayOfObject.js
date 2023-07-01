import React, { useState } from "react";
const ArrayOfObject=()=>{
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
    const Add=()=>{
        let oldArray=[...student];
        oldArray.push({Name: "Priya", Branch: "ME", Relation: "Friends"})
        oldArray.push({Name: "Arya", Branch: "Nursing", Relation: "Friends"})
        setstudent(oldArray);
    }
    const Remove=()=>{
        let oldArray=[...student];
        oldArray.pop({Name: "Priya", Branch: "ME", Relation: "Friends"})
        oldArray.pop({Name: "Arya", Branch: "Nursing", Relation: "Friends"})
        setstudent(oldArray);
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
            </ol>
            </>
    )
})}
            <button type="button" onClick={()=>Add()}>Add</button>
            <br></br>
            <button type="button" onClick={()=>Remove()}>Remove</button>
            
        </>
    )
}
export default ArrayOfObject;