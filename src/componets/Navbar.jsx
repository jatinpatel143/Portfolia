import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<nav>
  <div className='navbar'>
  <h1>   <Link to={"/"}> <span style={{color : "red"}}> J</span>atin</Link></h1>
    <ul>
    <Link to="/Home">  <Button style={{color : 'white'}} variant="text">Home</Button>
      </Link>
      <Link to="/rejume">  <Button style={{color : 'white'}} variant="text">resume</Button>
      </Link>
      <Link to="/project"> <Button style={{color : 'white'}} variant="text">Project</Button> </Link>
      <Link to="/contact"> <Button style={{color : 'white'}} variant="text">Contact</Button></Link>
    </ul>
  </div>
</nav>
  )
}

export default Navbar