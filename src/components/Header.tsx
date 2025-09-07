import { useState, useEffect } from "react";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Courses", href: "#courses" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-medium border-b border-border"
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                    <h3 className={`${isScrolled ? "text-foreground" : "text-white"} text-2xl font-bold`}>Repair <span className="text-repairx-yellow">X</span></h3>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <button key={index} className={`${isScrolled ? "text-foreground" : "text-white"} hover:text-repairx-yellow transition-colors duration-200 font-medium`}>{link.name}</button>
                    ))}
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header