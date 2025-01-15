import React from 'react'

function ChildOne({test}) {
  console.log('ChildOne Rendered')
  return (
    <div>ChildOne</div>
  )
}

export default React.memo(ChildOne)