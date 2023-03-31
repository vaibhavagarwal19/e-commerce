import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Slider from './Slider'

function Home() {
  return (
    <div>
        {/* <Announcement/> */}
        <Navbar/>
    <Slider/>
    <Footer/>
    </div>
  )
}

export default Home