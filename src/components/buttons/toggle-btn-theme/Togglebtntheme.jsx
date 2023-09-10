import React, {useState,useContext} from "react";
import emoji from "react-easy-emoji";
import './Togglebtntheme.scss';
import StyleContext from '../../../contexts/StyleContext';

function Togglebtntheme() {
  const {isDark} = useContext(StyleContext);
  const [isShow,setShow]=useState(true)
  const styleContext = useContext(StyleContext);
  return (
    <label className="switch">
      <input type="checkbox"checked={isDark}onChange={() => {styleContext.changeTheme();setShow(!isShow)}}/>
      <span className="slider round">
        <span className="emoji">{isShow ?  emoji("☀️") : emoji("🌜") }</span>
      </span>   
    </label>
  )
}

export default Togglebtntheme
