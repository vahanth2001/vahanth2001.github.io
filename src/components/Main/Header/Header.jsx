import React from 'react'
import Togglebtntheme from '../../buttons/toggle-btn-theme/Togglebtntheme'
function Header() {
  return(
    <div className='Header'>
      <Togglebtntheme />
      <div className='Profile'>
        <div className='Profile-pic'>
          <img className='Profile-pic' src='../../../../public/Untitled.png'alt=' '/>
        </div>
        <h4 className='Name'>VAHANTH PHALGUNA BOINPALLY</h4>
      </div>
      <div className='Socialmedia'>
        <h5>Social-Media</h5>
      </div>
      <div className='Menu'>
        <ul>
          <li type='button' className='Home'>Home</li>
          <li type='button'className='About'>About</li>
          <li type='button'className='Skills'>Skills</li>
          <li type='button'className='work-Experiences'>work-Experiences</li>
          <li type='button'className='Projects'>Projects</li>
          <li type='button'className='Sevices'>Services</li>
          <li type='button'className='Contact'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header