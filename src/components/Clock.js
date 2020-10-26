import React, { useState, useEffect } from 'react'

export default function Clock() {
  let [time, setTime] = useState({})

  useEffect(() => {
    const digitalClock = () => {
      const date = new Date();
      let hours = date.getHours() + '';
      let minutes = date.getMinutes() + '';
      let seconds = date.getSeconds() + '';
      const day = date.getDay();
            
      if (hours.length < 2) {
        hours = '0' + hours;
      }
        
      if (minutes.length < 2) {
        minutes = '0' + minutes;
      }

      if (seconds.length < 2) {
        seconds = '0' + seconds;
      }
        
      const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            
      const week = weekDays[day];
      const clock = hours + ':' + minutes + ':' + seconds;
        
      setTime({
        week,
        clock
      })

    }

    setInterval(digitalClock, 1000);
  }, [])

  return (
    <div className="clock">
      <h2>{time.week}</h2>
      <h1>{time.clock}</h1>      
    </div>
  )
}
