import React from 'react'

const StopWatch = () => {
    const [watch, setWatch] = React.useState(Date.now())
    const [timeId, setTimeId] = React.useState(null)

    const start=()=>{
        if(timeId==null)
        {
            let id=setInterval(()=> {
                setWatch((prev)=> prev+1)
            },1000)
            setTimeId(id)
        }
    }
    const reset=()=>{
        clearInterval(timeId)
        setWatch(Date.now())
        setTimeId(null)
    }
    const pause=()=>{
        clearInterval(timeId)
    }

    // console.log(timeId)

  return (
    <div>
        <h1>StopWatch</h1>
        <h2>{watch}</h2>
    <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
    </div>
    </div>
  )
}

export default StopWatch