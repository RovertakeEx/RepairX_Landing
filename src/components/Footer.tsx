import { 
  MessageCircle, Facebook, Instagram, Youtube 
} from "lucide-react";

function Footer() {
  // Social links array
  const socialLinks = [
    { icon: MessageCircle, href: "https://wa.me/919876543210", label: "WhatsApp", hoverColor: "text-green-500" },
    { icon: Facebook, href: "https://facebook.com/repairx", label: "Facebook", hoverColor: "text-blue-600" },
    { icon: Instagram, href: "https://instagram.com/repairx", label: "Instagram", hoverColor: "text-pink-600" },
    { icon: Youtube, href: "https://youtube.com/repairx", label: "YouTube", hoverColor: "text-red-600" },
  ];

  // Quick links array
  const quickLinks = ["Home", "About", "Services", "Courses", "Contact"];

  // Contact info array
  const contactInfo = [
    { type: "phone", value: "+91 98765 43210", href: "tel:+919876543210" },
    { type: "email", value: "info@repairx.com", href: "mailto:info@repairx.com" },
    { type: "address", value: "123 Tech Street\nDigital City, IN 560001" },
    { type: "hours", value: "Mon-Sat: 9AM-8PM\nSun: 10AM-6PM" },
  ];

  return (
    <footer className="gradient-tech text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4">
              REPAIR<span className="text-repairx-yellow">X</span>
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
                    className={`p-3 bg-white/10 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 ${link.hoverColor}`}
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-repairx-yellow">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button className="text-gray-300 hover:text-repairx-yellow transition-colors duration-200 text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-repairx-yellow">Contact Info</h3>
            <ul className="space-y-3 text-gray-300">
              {contactInfo.map((item, index) => (
                <li key={index} className={item.type === "address" || item.type === "hours" ? "text-sm leading-relaxed" : ""}>
                  {item.href ? (
                    <a href={item.href} className="hover:text-repairx-yellow transition-colors">
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
          <div className="text-sm text-gray-300 mb-4 md:mb-0">Powered by Rovertake</div>
          <div className="flex space-x-6 text-sm text-gray-300">
            <a href="#" className="hover:text-repairx-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-repairx-yellow transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
