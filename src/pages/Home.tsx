import React from 'react'
import Hero from '../custom-components/Hero'
import About from '../custom-components/About'
import Services from '../custom-components/Services'
import Portfolio from '../custom-components/Portfolio'
import Testimonials from '../custom-components/Testimonials'

const Home = () => {
  return (
    <div className='w-full'>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
    </div>
  )
}

export default Home