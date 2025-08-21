import React, { useContext } from 'react'
import App from './App.jsx';
import { postman } from './App.jsx';

// this is the last child or we want to access that data here so we use useContext hook

const Child3 = () => {
    const data = useContext(postman);
  return (
    <div>
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
    </div>
  )
}

export default Child3