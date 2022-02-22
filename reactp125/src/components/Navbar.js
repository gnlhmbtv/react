import React from 'react'

 function Navbar(props) {
  return (
    <div>
      <h1 className='test' style={{color:"red",backgroundColor:"teal"}}>{props.title}</h1>
    </div>
  )
}

export default Navbar