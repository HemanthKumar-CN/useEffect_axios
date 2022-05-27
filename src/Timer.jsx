import React from 'react'

const Timer = () => {

    const [timer, setTimer] = React.useState(10)

    React.useEffect(() => {
      const id=setInterval(()=> {
          if(timer>0)
          {
            setTimer(timer-1)
          }
      },1000)
    
      return () => {
        clearInterval(id)
      }
    }, [timer])
    


  return (
    <div>
        <h1>Timer</h1>
        CountDown: {timer}
    </div>
  )
}

export default Timer