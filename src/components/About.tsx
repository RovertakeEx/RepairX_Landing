import { CheckCircle, Users, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "1000+", label: "Students Trained" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: CheckCircle, value: "98%", label: "Success Rate" },
    { icon: Clock, value: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" className="py-20 bg-repairx-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-repairx-black mb-6">
                About <span className="text-repairx-yellow">RepairX</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We specialize in advanced mobile phone repairs and professional
                training courses to build your future in mobile technology. With
                years of industry experience, we provide cutting-edge repair
                solutions and comprehensive education programs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our expert team combines technical expertise with practical
                training to ensure you receive the highest quality service and
                education in mobile device repair technology.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {[
                "Advanced diagnostic equipment and tools",
                "Certified professional instructors",
                "Industry-standard repair techniques",
                "Comprehensive training curriculum",
                "Ongoing support and mentorship",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-repairx-yellow flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats rendered via map */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon; // assign the icon
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="h-12 w-12 text-repairx-yellow mx-auto mb-4" />
                  <div className="text-3xl font-bold text-repairx-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 