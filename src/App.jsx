import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Program/Programs'
import Title from './Components/Title/Title'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import About2 from './Components/About/About2'
import Goals from './Components/Goals/Goals'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title title='What We Offer'/>
          <Programs/>
          <Goals/>
          <Title title='About Us' />
          <About/>
          <About2/>
          <Title subTitle='Contact Us' title='Get in Touch'/>
          <Contact/>
          <Footer/>
      </div>
    </div>
  )
}

export default App