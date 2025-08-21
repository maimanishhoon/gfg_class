import React from 'react'
import { useState  } from 'react';
import Child from './Child';

const App = () => {
  const[name, setName] = useState("");
  return (
    <div>
      <Child setName={setName} name={name} />
      <h2>This is in side the parent : {name}</h2>
    </div>
  )
}

export default App