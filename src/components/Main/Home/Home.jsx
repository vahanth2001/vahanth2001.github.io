import React from 'react'
import Typewriter from 'typewriter-effect'

function Home() {
  const words =<Typewriter options={{strings: ["Designer", "Developer", "Freelancer"],autoStart: true,loop: true,}}/>
  return (
    <div class="hero-container" data-aos="fade-in">
      <h1>Boinpally Vahanth Phalguna</h1>
      <h5>I'm a {words}</h5>
    </div>
  )
}

export default Home