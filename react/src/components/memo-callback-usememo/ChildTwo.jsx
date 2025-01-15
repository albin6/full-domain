import React from 'react'

function ChildTwo() {
  console.log("ChildTwo Rendered")
  return (
    <div>ChildTwo</div>
  )
}

export default React.memo(ChildTwo)