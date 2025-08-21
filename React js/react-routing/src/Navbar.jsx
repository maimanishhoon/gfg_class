import React from 'react'
import { Link } from 'react-router-dom'
import About from './component /About';
import Login from './component /Login';
import ContactUs from './component /ContactUs';


const Navbar = () => {
  return (
    <>
    <h1 className='text-red-800 font-extrabold'>This is a Navbar</h1>
      <div className=" max-w-[1200px] mx-auto px-4 w-auto h-6  bg-base-100 shadow-sm">
       <ul>
           <li ><Link to="/">Home</Link> </li>
              <li><Link to="/About">About</Link> </li>
              <li><Link to="/ContactUs">ContactUs</Link> </li>
              <li><Link to="/Login">Login</Link> </li>
       </ul>
    </div>
    </>
  )
}

export default Navbar