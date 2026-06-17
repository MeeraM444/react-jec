import React from 'react'

const UseEffectExample=()=>{

const [count,setCount]=React.useState(0)
React.useEffect(()=>{
    console.log("Use effect is Active")
},[count])

  return (
    <>
    <h1>UseEffect</h1>
    <h2>Count:{count}</h2>
    <button onClick ={()=> setCount(count+1)}>Add</button>
    </>
  )
}

export default UseEffectExample