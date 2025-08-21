import React from 'react'
import { useState } from 'react'

const App = () => {
  const [Value, setValue] = useState(0);

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