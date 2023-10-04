import React, {useContext} from 'react'
import Headroom from "react-headroom";
import StyleContext from "../../../contexts/StyleContext";
import Togglebtntheme from '../../buttons/toggle-btn-theme/Togglebtntheme'
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  achievementSection
} from "../../portfolio";
function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewGreetings = greeting.display;
  return(
    <Headroom>
    <div className={isDark ? "dark-menu header" : "header"}>
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
      <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#Home">Home</a>
          </li>
          {viewGreetings && (
            <li>
              <a href="#About">About</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work-Experiences</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
         <li>
            <a href="#contact">Contacts</a>
          </li>
        </ul>
    </div>
    </Headroom>
  )
}

export default Header