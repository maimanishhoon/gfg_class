import React from 'react'
import Child from './Child'
import { createContext } from 'react'
// this is the parent so we here , we create a Context

export const postman = createContext();

const App = () => {
  const data ={
    name:"Manish",
    age :"21"
  }
  return (
    <postman.Provider value={data}>
    <div>
      <Child/>
    </div>
    </postman.Provider>
  
  )
}

export default App
//disadvantage 
// it is use in small module only 
//for the globle data transfer we use REDUX
//this is complex also

//advantage
//solve the problem prop drilling
//stop the unwanted parsing