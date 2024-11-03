import React from 'react'
import Hero from '../../components/About/Hero'
import Section3 from '../../components/About/Section3'
import Section4 from '../../components/About/Section4'
import Team from '../../components/About/Team'
import Testimonial from '../../components/Testimonials/Testimonial'

const About = () => {
  return (
    <main>
    <Hero/>
    <Section3/>
    <Section4/>
    {/* <Testimonial/> */}
    <Team/>
    </main>
  )
}

export default About