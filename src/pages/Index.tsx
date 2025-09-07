import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Courses from "../components/Courses";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Courses />
      <Reviews />
      <Contact />
    </div>
  )
}

export default Index