import "./App.css";
import Navbar from "./Layouts/Navbar";
import {
  Achievements,
  BlogArticle,
  CarouselSlider,
  Experienced,
  Feautured,
  Gallery,
  Header,
  SignupForm,
  Team,
} from "./Components";
import Footer from "./Layouts/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Feautured />
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

export default App;
