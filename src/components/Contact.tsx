import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      info: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@repairx.com",
      link: "mailto:info@repairx.com"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "123 Tech Street, Digital City, IN 560001",
      link: "#"
    },
    {
      icon: Clock,
      title: "Hours",
      info: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-repairx-yellow">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our services or courses? We're here to help. Contact us and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-card rounded-lg border border-border hover:shadow-medium transition-all duration-300"
                    >
                      <div className="p-2 bg-repairx-yellow-light rounded-lg">
                        <Icon className="h-6 w-6 text-repairx-yellow-dark" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-1">{item.title}</h4>
                        {item.link.startsWith('#') ? (
                          <p className="text-sm text-muted-foreground">{item.info}</p>
                        ) : (
                          <a
                            href={item.link}
                            className="text-sm text-repairx-yellow hover:text-repairx-yellow-dark transition-colors"
                          >
                            {item.info}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-lg border-border border bg-card text-card-foreground shadow-sm overflow-hidden">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Find Us</h3>
                    <p className="text-sm text-muted-foreground">Visit our repair center and training facility</p>
                </div>
                <div className="p-0 h-[450px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.618479539296!2d79.84826067448289!3d6.936119018231976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25900168c34d5%3A0x8068cebf1e7bacf7!2sRepair%20X%20(Pvt)%20Ltd.!5e0!3m2!1sen!2slk!4v1757243478811!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
            </div>
          </div>
          <div className="rounded-lg border-border border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold tracking-tight text-2xl">Send us a Message</h3>
                <p className="text-sm text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>
            <div className="p-6 pt-0">
                <form action="" className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="" className="text-sm font-medium leading-none">Full Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your full name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground md:text-sm mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" required/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="" className="text-sm font-medium leading-none">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email address" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground md:text-sm mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" required/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="" className="text-sm font-medium leading-none">Phone No</label>
                    <input type="number" name="phone" id="phone" placeholder="Enter your mobile number" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground md:text-sm mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" required/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="" className="text-sm font-medium leading-none">Message</label>
                    <textarea name="message" id="message" placeholder="Tell us how we can help you..." className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground md:text-sm mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" rows={6} required></textarea>
                  </div>
                  <div className="space-y-2">
                    <button className="inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-sm [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full bg-repairx-yellow hover:bg-repairx-yellow-dark text-repairx-black font-semibold transition-colors duration-200">
                    Send Message
                  </button>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact