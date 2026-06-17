import React from 'react'

import Array from './components/Array'
import{Routes,Route,Link,BrowserRouter} from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <nav>
      <link to="/">Home</link>
       <link to="/about">About</link>
        <link to="/contact">Contact</link>
    </nav>
    <router>
      <route path ="/"element={<HomePage></HomePage>}/>
       <route path ="/about"element={<AboutPage></AboutPage>}/>
        <route path ="/contact"element={<ContactPage></ContactPage>}/>
    </router>
    </BrowserRouter>
    </>
  )
}

export default App