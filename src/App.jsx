import React from 'react'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Bridal from './sections/Bridal'
import Party from './sections/Party'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import Footer from './sections/Footer'


const App = () => {
  return (
    <section>
    <header><Nav></Nav></header>
    <Hero></Hero>
    <Services></Services>
    <Bridal></Bridal>
    <Party></Party>
    <About></About>
    <Testimonials></Testimonials>
    <Footer></Footer>
    </section>
  )
}

export default App