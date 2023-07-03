import React from 'react'
import '../App.css'

const Footer = () => {
  const currYear = new Date().getFullYear();
  const myStyle = {
    position: "fixed",
    textAlign: "center",
    color: "white",
    bottom: "0",
    width: "100%",
    height: "2.5rem"
  };
    return (
    <footer style={myStyle}>
        Copyright © {currYear}     
    </footer>
  )
}

export default Footer
