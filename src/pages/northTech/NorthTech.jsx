import Accomploshment from '@/Components/Northech/Accomploshment'
import NorTechHero from '@/Components/Northech/NorTechHero'
import SuccessStoryGrid from '@/Components/Northech/SuccessStoryGrid'
import Footer from '@/Layouts/Footer'
import Navbar from '@/Layouts/Navbar'

const NorthTech = () => {
  return (
    <div>
    <Navbar />
    <NorTechHero />
      <SuccessStoryGrid />
      <Accomploshment />
      <Footer />
    </div>
  )
}

export default NorthTech