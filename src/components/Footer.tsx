import socialLinks from "../data/socialLinks"
import appSettings from "../data/appSetting";
import navLinks from "../data/navLinks";

const Footer = () => {

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="gradient-tech text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4">
              Repair <span className="text-repairx-yellow">X</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Leading mobile repair service and training center. Building the future of mobile technology through professional repair services and comprehensive education programs.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`p-3 bg-white/10 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 ${link.hoverColor}`}
                  >
                    {/* Move hoverColor to Icon */}
                    <Icon className={`h-5 w-5 transition-colors duration-300 `} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-repairx-yellow">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={()=> scrollToSection(link.href)}
                    className="text-gray-300 hover:text-repairx-yellow transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-repairx-yellow">Contact Info</h3>
            <ul className="space-y-3 text-gray-300">
              {appSettings.contactInfo.map((item, index) => (
                <li
                  key={index}
                  className={item.type === "address" || item.type === "hours" ? "text-sm leading-relaxed" : ""}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-repairx-yellow transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-300 mb-4 md:mb-0">
            © 2025 | Powered by{" "}
            <a
              href={appSettings.company.poweredBy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-repairx-yellow transition-colors font-medium"
            >
              {appSettings.company.poweredBy.name}
            </a>
          </div>
          <div className="flex space-x-6 text-sm text-gray-300">
            <a href="#" className="hover:text-repairx-yellow transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-repairx-yellow transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
