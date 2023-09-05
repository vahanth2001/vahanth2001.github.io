import React, {Component, Suspense} from "react";
import Loading from "../loading/Loading";
import {Player} from '@lottiefiles/react-lottie-player';


export default class DisplayLottie extends Component {
  render() {
    const path = this.props.path;
    return (
      <Suspense fallback={<Loading />}>
        <Player 
        autoplay 
        loop 
        src= {path} 
        style={{ height: '500px', width: '1000px', }}> </Player>
      </Suspense>
    );
  }
}
