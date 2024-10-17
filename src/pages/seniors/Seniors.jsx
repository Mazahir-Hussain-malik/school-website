import Footer from '@/Layouts/Footer'
import Navbar from '@/Layouts/Navbar'
import React from 'react'
import SeniorsHero from '@/Components/seniors/SeniorsHero'
import SeniorCourses from '@/Components/seniors/SeniorCourses'

const Seniors = () => {
  return (
    <div>
        <Navbar />
        <SeniorsHero />
        <SeniorCourses />
        <Footer />
    </div>
  )
}

export default Seniors