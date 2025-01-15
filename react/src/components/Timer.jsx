import React, { useEffect, useRef, useState } from 'react'

function Timer() {
    // const [timer, setTimer] = useState(0)

    const inpRef = useRef()
    const [updated, setUpdated] = useState(false)

    // useEffect(() => {
    //     const timer = setInterval(() => setTimer(prev => prev + 1), 1000)

    //     return () => clearInterval(timer)
    // }, [])

    function updateValue(e) {
        inpRef.current.value = e.target.value
        setUpdated(!updated)
    }

  return (
    <div>
        {/* <h2>{timer}</h2> */}
        <input type="text" ref={inpRef} onChange={updateValue}  />
        <div>
            <h4>{inpRef.current.value}</h4>
        </div>
    </div>
  )
}

export default Timer