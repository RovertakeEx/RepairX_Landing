import '../assets/css/hero.css'
import { ArrowRight, Wrench, GraduationCap } from "lucide-react";
import logoWhite from "../assets/img/repairx-logo-white.png"

const Hero = () => {

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id='home' className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden ">
      <div className='absolute inset-0 gradient-hero opacity-90 flex items-center'>
        <div className='relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto'>
          <div className='animate-float flex justify-center'>
            {/* <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>Repair <span className='text-repairx-yellow'>X</span></h1> */}
            <img src={logoWhite} alt="RepairX logo" width={300}/>
          </div>
          <h2 className='text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-gray-200'>Advanced Mobile Phone Repairs & Training</h2>
          <p className='text-lg sm:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed'>
            Professional mobile repair services and comprehensive training courses to build your future in mobile technology.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <button 
            onClick={() => scrollToSection("#courses")}
            className='inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md bg-repairx-yellow hover:bg-repairx-yellow-dark text-repairx-black font-semibold px-8 py-4 text-lg shadow-yellow transition-all duration-300 hover:scale-105 w-3/4 md:w-auto'>
              <GraduationCap/>
              Explore Courses
              <ArrowRight/>
            </button>
            <button 
            onClick={() => scrollToSection("#services")}
            className='inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-white h-11 rounded-md border-white text-repairx-black hover:bg-white hover:text-repairx-black px-8 py-4 text-lg transition-all duration-300 hover:scale-105 w-3/4 md:w-auto'>
              <Wrench/>
              Get Repair Service
              <ArrowRight/>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero