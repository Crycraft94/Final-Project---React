import React from 'react';
import Countdown from 'react-countdown';


export const Timer = () => {
            // Random component
const Completionist = () => <span>وقت شما به پایان رسید!</span>;
    // Renderer callback with condition
const renderer = ({  minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{minutes}:{seconds}</span>;
    }
  };
  return (
    <>

  <Countdown
    date={Date.now() + 120000}
    renderer={renderer}
   />
    </>
  )
}
