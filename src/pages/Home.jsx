import React from 'react'
import HeroSection from '../components/HeroSection'

import FeaturedSection from '../components/FeaturedSection'
import TrailerSection from '../components/TrailerSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      {/* home page is consist of following components */}
      <HeroSection/>
      <FeaturedSection/>
      <TrailerSection/>
      <Footer/>
    </div>
  )
}

export default Home