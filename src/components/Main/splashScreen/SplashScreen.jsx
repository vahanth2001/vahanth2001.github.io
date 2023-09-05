import React, {useContext} from 'react';
import "./SplashScreen.scss";
import DisplayLottie from '../../displayLottie/DisplayLottie';
import {greeting, splashScreen} from "../../portfolio";
import StyleContext from '../../../contexts/StyleContext';
function SplashScreen() {
    const {isDark} = useContext(StyleContext);
    return (
      <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
        <div className="splash-animation-container">
          <DisplayLottie path={splashScreen.animation} />
        </div>
        <div className="splash-title-container">
          <span className="grey-color"> &lt;</span>
          <span className="splash-title">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </div>
      </div>
    );
}

export default SplashScreen