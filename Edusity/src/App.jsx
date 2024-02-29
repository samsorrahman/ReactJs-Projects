import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplay from './Components/Videoplayer/Videoplay'
import { useState } from 'react'

const App = () => {
  const [playState, setPlayState] = useState(false)




  return (
    <div>
        <Navbar />
        <Hero/>
        <div className="container">
          <Title subTitle='OUR PROGRAM' title='What We Offer' />
            <Program />
        

        <About setPlayState={setPlayState} />

        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='what student says' />
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
        </div>    
        < Videoplay playState={playState} setPlayState={setPlayState} />
        </div>
  )
}

export default App