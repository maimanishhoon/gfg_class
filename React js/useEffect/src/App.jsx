import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [Value, setValue] = useState(0);

  //wheater api call
  useEffect(()=>{
    console.log("This is call the wheater API")
  },[]) // this will only call api at the time of page load

  // if we send messsage every time at the time of state change
useEffect(()=>{
    console.log("You Change the state")
  },[Value])
  function handleIncrease() {
    setValue(Value + 1);
    console.log(Value);
  } 
  function handledecrease() {
    setValue(Value - 1);
    console.log(Value);
  } 
  return (
    <div>
      <h1>count :{Value}</h1>
      <button onClick={handleIncrease}>IncreaseValue</button>
      <button onClick={handledecrease}>decreaseValue</button>
    </div>
  )
}

export default App