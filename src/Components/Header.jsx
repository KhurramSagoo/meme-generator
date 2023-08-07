import React from 'react'
import '../App.scss'
import TrolFace from '../img/Troll Face.svg'

const Header = () => {
  return (
  <header className='header'>
    <div className='both'><img className='logo' src={TrolFace} alt="troll face" />
  <h2 className='heading'>Meme Generator</h2></div>
    
  <h5>React Course Project 3</h5>
  
  </header>
  
    )
}

export default Header