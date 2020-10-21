import React, { useState, useEffect } from 'react'

export default function Clock() {
  let [time, setTime] = useState({})

  useEffect(() => {
    const digitalClock = () => {
      const date = new Date();
      let hours = date.getHours() + '';
      let minutes = date.getMinutes() + '';
      const day = date.getDay();
            
      if (hours.length < 2) {
        hours = '0' + hours;
      }
        
      if (minutes.length < 2) {
        minutes = '0' + minutes;
      }
        
      const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            
      const week = weekDays[day];
      const clock = hours + ':' + minutes;
        
      setTime({
        week,
        clock
      })
      console.log("sat unutra");
    }

    console.log("sat");

    setInterval(digitalClock, 60000);
  }, [time])

  return (
    <div>
      <h2>{time.week}</h2>
      <h1>{time.clock}</h1>      
    </div>
  )
}
