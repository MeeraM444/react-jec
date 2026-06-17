import React from 'react'

const SamForm = () => {
  return (
    <>
    <h1>Form Task</h1>
    <form>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name"/> 
    <br />
    <br />
    <label htmlFor="email">Email:</label>
    <input type="text" id="email" name="email"/> 
    <br />
    <br />
    <label htmlFor="password">Password</label>   
    <input type="password" id ="password" name="password"/>
    <br />
    <br />
    <label htmlFor="password"> Confirm Password</label>   
    <input type="password" id ="password" name="password"/>
    <br /><br />
    <button type="submit">Submit</button>

    </form>
    </>
  )
}

export default SamForm