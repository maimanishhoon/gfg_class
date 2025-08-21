import React, { useRef } from 'react'
import { useState } from 'react'

//problem 
const App = () => {
  const[Count, setCount] = useState(0);
  // let Value = 0;
  // the problem are in the value of Value

  const ref = useRef(0)// const ref = useRef(initial Value)
  function handleCount(){
    setCount(Count + 1);
    // Value = Value + 1;// here we want to incresase the Value of value by 1 , when handleCount function is running 
    ref.current = ref.current + 1;//ref.current mtlb ref ki current value
    console.log(ref.current);
  }
  // But is not working , it will show only 1 again and again 
  //the reason of that is : when the state update it will reload the whole page and when the page reload the value's value change and set to default value (that was given by use)

  //DOM manipulation
  const ref2 = useRef()
  ref2.current.style.color = "red";
  return (

    // to solve this problem we use useRef hook
    <div>
      <h1>Count is {Count} {ref.current}</h1>
      <p ref={ref2}> This we can change color using DOM manipulation using useRef hook</p>
      <button onClick={handleCount}>
        add Value
      </button>
    </div>
  )
}

export default App