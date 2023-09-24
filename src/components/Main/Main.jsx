import React,{useState,useEffect} from 'react'
import './Main.scss'
import Header from './Header/Header'
import Home from './Home/Home'
import Skills from './Skills/Skills'
import About from './About/About'
import Workexpermice from './Workexperince/Workexperince'
import Projects from './Projects/Projects'
import Resume from './Resume/Resume'
import Services from './Services/Services'
import Contact from './Contact/Contact'
import {StyleProvider} from '../../contexts/StyleContext'
import {useLocalStorage} from './hooks/useLocalStorage'
import SplashScreen from './splashScreen/SplashScreen'
import { splashScreen } from '../portfolio'
import Achievement from './Achivements/Achivements'

function Main() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
  useState(true);

useEffect(() => {
  if (splashScreen.enabled) {
    const splashTimer = setTimeout(
      () => setIsShowingSplashAnimation(false),
      splashScreen.duration
    );
    return () => {
      clearTimeout(splashTimer);
    };
  }
}, []);
  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? 'App-Dark' : 'App-Light'}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
          <div className='Side-bar'>
            <Header />
          </div>
          <div className='Main-Portfolio'>
            <Home />
            <Skills />
            <About />
            <Workexpermice />
            <Projects />
            <Achievement />
            <Resume />
            <Services />
            <Contact />
          </div>
          </>
        )}
      </StyleProvider>
    </div>
  )
}

export default Main