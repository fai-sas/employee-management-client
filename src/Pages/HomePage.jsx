import { useEffect } from 'react'
import CTA from '../Components/CTA'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Teams from '../Components/Teams'
import Testimonial from '../Components/Testimonial'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Services />
      <Testimonial />
      <CTA />
      <Teams />
    </div>
  )
}

export default HomePage
