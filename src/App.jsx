import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Program/Programs'
import Title from './Components/Title/Title'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Hero/>
      <div className="container">
        <Title title='What We Offer'/>
          <Programs/>
          <Title subTitle='Contact Us' title='Get in Touch'/>
          <Contact/>
          <Footer/>
      </div>
    </div>
  )
}

export default App