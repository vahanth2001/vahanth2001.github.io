import React ,{useContext} from 'react'
import Typewriter from 'typewriter-effect'
import {Fade} from "react-reveal"
import emoji from "react-easy-emoji"
import landingPerson from "../../Lotties/landingPerson.json"
import DisplayLottie from "../../displayLottie/DisplayLottie"
import SocialMedia from "../socialMedia/SocialMedia"
import Button from "../../buttons/Button"
import {illustration, greeting} from "../../portfolio"
import StyleContext from "../../../contexts/StyleContext"

function Home() {
  const words =<Typewriter options={{strings: ["Designer", "Developer", "Freelancer"],autoStart: true,loop: true,}}/>
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div>
      <div class="hero-container" data-aos="fade-in">
      <h1>Boinpally Vahanth Phalguna</h1>
      <h5>I'm a {words}</h5>
    </div>
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>{" "}{greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p className={ isDark? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}>{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                        text="See my resume"
                        newTab={true}
                        href={greeting.resumeLink}
                      />
                    )}
              </div>
            </div>
          </div>
        <div className="greeting-image-div">
                {illustration.animated ? (
                  <DisplayLottie animationData={landingPerson} />
                ) : (
                  <img
                    alt="man sitting on table"
                    src={require("../../../assets/images/manOnTable.svg")}
                  ></img>
                )}
        </div>
      </div>
      </div>
    </Fade>
    </div>
  );
}    

export default Home