import React, {useState} from "react";



function App() {

  let clock = new Date().toLocaleTimeString();
  let [time, updateTime] = React.useState(clock)

  // setInterval((()=> {
  //   let time = new Date().toLocaleTimeString();
  //   updateTime(time)
  //   console.log(time);

  // }), 1000)
  
  setInterval(changeTime, 1000)

  function changeTime(){
    let time = new Date().toLocaleTimeString();
    updateTime(time)

  }

  return (
    <div>
      <div className="container">
        <h1>{clock}</h1>
        <button onClick={changeTime}>Get Time</button>
      </div>
    </div>
  );
}

export default App;
