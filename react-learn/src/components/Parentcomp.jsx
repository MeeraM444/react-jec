import React from 'react'
import Childcomp from './Childcomp'

const Parentcomp = () => {
  return (
   <>
   <h1>Parentcomponent</h1>
   <Childcomp name="Anupama" dept="CSE">
   </Childcomp>
   </>
  )
}

export default Parentcomp
