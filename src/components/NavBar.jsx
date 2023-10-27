import React from 'react'
import './NavBar.css'
import { fetchAPI } from './fetchAPI'


const NavBar = ({setContents}) => {

  const handleClick = async (endPoint) => {
    const data = await fetchAPI(`https://jsonplaceholder.typicode.com/${endPoint}`)
    setContents(data);
  }
  
  return (
    <div className='NavBar'>
        <button value='users' onClick={(event) => handleClick(event.target.value)}>Users</button>
        <button value='posts' onClick={(event) => handleClick(event.target.value)}>Posts</button>
        <button value='comments' onClick={(event) => handleClick(event.target.value)}>Comments</button>
    </div>
  )
}

export default NavBar;