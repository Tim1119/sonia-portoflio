import React from 'react'
import Hero from '../custom-components/Hero'
import About from '../custom-components/About'
import Services from '../custom-components/Services'

const Home = () => {
  return (
    <div className='w-full bg-red-300'>
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default Home