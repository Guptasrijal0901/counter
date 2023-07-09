import {useState} from "react";
const TaskManage =()=>{
    const [newTaskTitle, setnewTaskTitle]= useState("");
    const [newTaskDes, setnewTaskDes]= useState("");
    const [newDate, setnewDate]= useState(" new Date()");
    return(
    <>
<div>
    <h1>Task Management Dashboard</h1>
</div>
<div>
    <lable>Task Title</lable>
   
    <input  value={newTaskTitle} onChange={(e)=>setnewTaskTitle(e.target.value)} type="text" placeholder="Enter your text"/>
</div>
<br></br>
<div>
    <lable>Task Description</lable>

    <input type="text" placeholder="Enter your description"/>
</div>
<br></br>
<div>
    <lable>Due date</lable>
    <input type="date"/>
</div>
<br></br>
<button type="button"> Create Task</button>
    </>
    );
}
export default TaskManage;