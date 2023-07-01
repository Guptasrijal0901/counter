import {useState} from "react";
const Body =()=>{
    const [bio, setbio]= useState({
   name: "SRIJAL",
   batch: "2025",
   branch: "ECE",
   college: "MMMUT,"
    });
    const [color, setcolor]= useState("ivory");
    const handleupdatebio=()=>{
        if (bio.name === "SRIJAL"){
            const newBio={
                name: "SHREYA",
                batch: "2026",
                branch: "BALLB",
                college: "DDU",
            };
            setbio(newBio);
            setcolor("whitesmoke");
        }
        else if (bio.name === "SHREYA"){
            const newBio={
                name: "SRIJAL",
                batch: "2025",
                branch: "ECE",
                college: "MMMUT",
            }
            setbio(newBio);
            setcolor("ivory");
        }
    };
        const handleupdatebranch=()=>{
            if (bio.branch === "ECE"){
                const updatedObject = {...bio};
                updatedObject.branch= "MECHANICAL";
                setbio(updatedObject);
            }
            else if (bio.branch === "MECHANICAL"){
                const updatedObject = {...bio};
                updatedObject.branch = "ECE";
                setbio(updatedObject);
            }
        };
        return(
            <>
                <div style={{backgroundColor: color}}>
                    <h1>
                        Hello My name is {bio.name}, and I study in {bio.college}. 
                        My branch is {bio.branch} and my batch is {bio.batch}.
                    </h1>
                <button onClick={()=>handleupdatebio()} type="button">
                {""} Update Bio{""}
                </button>
                <br></br>
                <button onClick={()=>handleupdatebranch()} type="button">
                {""} Update branch{""}
                </button>
                </div>
            </>
        )
    }

export default Body;