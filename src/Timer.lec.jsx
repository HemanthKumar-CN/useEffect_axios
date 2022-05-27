import React from 'react'

const Timer_lec = () => {

    const [timer, setTimer] = React.useState(20)

    React.useEffect(() => {
      const id=setInterval(()=> {
          
        setTimer((prev)=> prev-1)
      },1000)
    
      return () => {
        clearInterval(id)
      }
    }, [])
    


  return (
    <div>
        <h1>Timer</h1>
        CountDown: {timer}
    </div>
  )
}

export default Timer_lec