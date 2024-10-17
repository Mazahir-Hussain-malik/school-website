import Navbar from "../../Layouts/Navbar";
import {
  Achievements,
  BlogArticle,
  CarouselSlider,
  Experienced,
  Gallery,
  Header,
  SignupForm,
  Team,
} from "../../Components";
import Footer from "../../Layouts/Footer";
import Departments from "@/Components/Departments";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Departments />
      <Experienced />
      <CarouselSlider />
      <Achievements />
      <SignupForm />
      <Team />
      <BlogArticle />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
