import { useState } from "react";

const Object= ()=>{
    const [bio, setbio]= useState({
        name: "Srijal Gupta",
        batch: "2025",
        branch: "ECE",
        college: "MMMUT",
    });
    
        
    
    return (
        <>
            <h1>
                Hello my name is {bio.name}, I study in {bio.college},
                in branch {bio.branch} and my batch is { bio.batch}.
            </h1>
        </>
    )
    
}
export default Object;