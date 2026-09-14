
import React from 'react'
import Navbar from '../components/Navbar'
import Mainscreen from '../components/Mainscreen'

const LandingPage = () => {
  return (
    <div className='landing min-h-screen w-full overflow-hidden'>
      <Navbar />
      <Mainscreen />
    </div>
  )
}

export default LandingPage;
