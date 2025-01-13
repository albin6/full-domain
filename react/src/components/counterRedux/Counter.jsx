import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
  return (
   <div style={{width : "500px", height : "400px", display : 'flex', justifyContent : 'space-between'}}>
    <button onClick={() => dispatch({type : 'DECREMENT'})}>decrement</button>
    <h2>{count}</h2>
    <button onClick={() => dispatch({type : 'INCREMENT'})}>increment</button>
   </div>
  )
}

export default Counter