import React, {useState} from "react";




function App() {
  //const state = React.useState(0);
  //console.log(state[0])
  const [count, setCount] = React.useState(0)

function increase(){
  //count++;
  // if(count == 20){
  //   setCount(20)
  // } else {
  //   setCount(count+1)
  // }
  count >= 20 ? setCount(20) : setCount(count+1)
 
  
}
function decrease(){
  if(count == 0){
    setCount(0)
  } else {
    setCount(count-1)

  }
}

  return (
    <div>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}

export default App;
