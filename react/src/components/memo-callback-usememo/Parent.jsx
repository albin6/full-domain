import React, { useCallback, useMemo, useState } from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

function Parent() {
  console.log('Parent Rendered')
  const [status, setStatus] = useState(false)
  const [showLabel, setShowLabel] = useState(false)
  // const test = {
  //   name : 'Albin'
  // }
  const test = useMemo(() => {
    return {
      name : 'Albin'
    }
  }, [])
  const testFunc = useCallback(() => {
    console.log('Hello from test function')
  }, [])
  return (
    <div>
        <div style={{width : "500px", height : "300px", backgroundColor : 'black', color : "white", display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
          Parent
          <div>
            <button onClick={() => setStatus(!status)}>Update Status</button>
          </div>
          <br />
          <div style={{display : 'flex'}}>
            <input type="checkbox" value={showLabel} onChange={() => setShowLabel(!showLabel)} id="label" />
            <label htmlFor="label">Show Label</label>
          </div>
          <h3>{showLabel && "Hello World"}</h3>
        </div>
        <div style={{width : "500px", height : "300px", backgroundColor : 'red', color : "white", display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
            <ChildOne test={testFunc} status={status} />
        </div>
        <div style={{width : "500px", height : "300px", backgroundColor : 'blue', color : "white", display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
            <ChildTwo />
        </div>
    </div>
  )
}

export default Parent