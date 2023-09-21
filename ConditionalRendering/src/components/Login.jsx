import React from "react";


function LogInForm(props){
    return (
        <form className="form">
        <Input
        type="text"
        placeholder="Username"
      />
      <Input
        type="password"
        placeholder="Password"
      /> 
       
        <button type="submit">Login</button>
      </form>
    )
}


export default LogInForm;













let obj = {}
let arr = []
function matchingStrings(strings, queries) {
    // Write your code here
  for(let i = 0; i < strings.length; i++){
      if(obj[strings[i]]){
          obj[strings[i]]++
      } else {
          obj[strings[i]] = 1
      } 
  }
    for(let i = 0; i < queries.length; i++){
        if(obj.hasOwnProperty(queries[i])){
            arr.push(obj[queries[i]])
        } else {
            arr.push(0)
        }
    }
    return arr
}






