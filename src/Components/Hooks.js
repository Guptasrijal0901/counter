// hook works inside the body of a functional component
//usestate is an array which returns two items 
// javascript mai 1 value milti hai par use state mai 2 value milti hai ek hota hai current data and other is updated data 
// usestate mai jo value dete hai usse initial data bolte hai
// usedata is called hooks in react
import React, { useState } from 'react';

// let count = 1;
const App =()=>{
const state = useState();
console.log(state);
const [count, setCount] = useState(0); // count is initial value and setcount is updated value
const IncNum =()=>{
    setCount(count + 5); // eses click karne pe hme value 100 milega 
// count++;
// console.log("Clicked ",  count++ );
};
return(
<>
<h1 className='count'> {count} </h1>
<button className='button' onClick={IncNum}> Click Me</button>
</>
)
    
}
export default App;