import { Smartphone, Cpu, HardDrive, Monitor, Wrench, Shield } from "lucide-react";

const Services = () => {

  const services = [
    {
      icon: Cpu,
      title: "Chip-Level Repair",
      description: "Advanced motherboard and IC chip repairs for complex hardware issues",
      features: ["IC Replacement", "BGA Reballing", "Microsoldering", "Circuit Analysis"]
    },
    {
      icon: Monitor,
      title: "Display Solutions",
      description: "Complete display and touch screen repair services",
      features: ["LCD Replacement", "Touch Repair", "Digitizer Fix", "Screen Calibration"]
    },
    {
      icon: HardDrive,
      title: "Data Recovery",
      description: "Professional data recovery from damaged mobile devices",
      features: ["File Recovery", "Photo Restoration", "Contact Retrieval", "App Data Recovery"]
    },
    {
      icon: Smartphone,
      title: "Hardware Repairs",
      description: "Comprehensive hardware diagnostics and component replacement",
      features: ["Camera Repair", "Speaker Fix", "Charging Port", "Button Replacement"]
    },
    {
      icon: Shield,
      title: "Water Damage",
      description: "Specialized water damage restoration and corrosion treatment",
      features: ["Liquid Damage", "Corrosion Cleaning", "Component Drying", "Circuit Protection"]
    },
    {
      icon: Wrench,
      title: "Software Solutions",
      description: "Software troubleshooting and firmware restoration",
      features: ["OS Recovery", "Bootloop Fix", "Firmware Flash", "Software Unlock"]
    }
  ];


  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-repairx-yellow">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional mobile phone repair services using advanced diagnostic tools and industry-standard techniques. We handle everything from simple fixes to complex chip-level repairs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
          {services.map((service) => (
              <div className="rounded-lg border text-card-foreground shadow-sm border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card">
                <div className="flex flex-col space-y-1.5 p-6 text-center pb-4 h-full">
                  <div className="mx-auto mb-4 p-4 bg-repairx-yellow-light rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-repairx-yellow-dark"/>
                  </div>
                  <h3 className="tracking-tight text-xl font-bold text-card-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <div className="p-6 pt-0 flex flex-col justify-end flex-grow">
                    <ul className="space-y-2 mb-6 mt-3 ">
                      {service.features.map((feature) => (
                          <li className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-repairx-yellow rounded-full mr-3"></div>
                            {feature}
                          </li>
                      ))}   
                    </ul>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md text-sm font-medium [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full bg-repairx-black hover:bg-repairx-gray text-white transition-colors duration-200">Get Service</button>
                  </div>
                </div>
              </div>
          ))}          
        </div>
      </div>
    </section>
  )
}

export default Services