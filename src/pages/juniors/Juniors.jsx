
import Actvities from '@/Components/juniors/Actvities'
import JuniorCourses from '@/Components/juniors/JuniorCourses'
import JuniorsHeader from '@/Components/juniors/JuniorsHeader'
import Footer from '@/Layouts/Footer'
import Navbar from '@/Layouts/Navbar'

const Juniors = () => {
  return (
    <div>
        <Navbar />
        <JuniorsHeader />
        <JuniorCourses />
        <Actvities />
        <Footer />
    </div>
  )
}

export default Juniors