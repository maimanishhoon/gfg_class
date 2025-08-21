import React from 'react'

const Child = (props) => {
    // function handleInput (e) {
    //     props.setName(e.target.value);
    // }
    const handleInput =(e) =>{
        props.setName(e.target.value);
    }
  return (
    <>
    <input type="text" placeholder='Enter Your Name:' onChange={handleInput} />
    <h1>Name Inside Child : {props.name}</h1>
    </>
  )
}

export default Child