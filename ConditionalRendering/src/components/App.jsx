import React from "react";

import Login from "./Login";
import Input from "./Input";

let isLoggedIn = true;

function renderConditional(props){
  if(isLoggedIn){
    return (
    <h1>Hello</h1>)
  } else{
    return (
    <div>
    
    </div>  
      

      // <form className="form">
      //   <input type="text" placeholder="Username" />
      //   <input type="password" placeholder="Password" />
      //   <button type="submit">Login</button>
      // </form>
    )
  }
}



function App() {
  return (
    <div className="container">
      {renderConditional(props)}
    </div>
  );
}

export default App;
