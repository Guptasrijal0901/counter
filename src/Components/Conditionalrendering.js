import React, { useState } from "react";

const App=()=>{
    const [isLoggedIn, setIsLoggedIn]= useState(false);
    
    const handleLogin = ()=>{
        setIsLoggedIn(true);
    };

    const handleLogout = ()=>{
        setIsLoggedIn(false)
    };
    return(
        <div>
            {isLoggedIn ? ( // yeh hai if statment
                <div>
                    <h1>
                        Welcome back!
                    </h1>
                    <button onClick={handleLogout}> Logout</button>
                </div>
            ):( // yaha pe else statemant hai 
                <div>
                    <h1> Please LogIn</h1>
                    <button onClick={handleLogin}>LogIn</button>
                </div>
            )
            }
        </div>
    )
}
export default App;