import { CheckCircle } from "lucide-react";
import { aboutText, stats, features } from "../data/about";

const About = () => {

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
              {aboutText.map((text, index) => (
                <p key={index} className="text-lg text-muted-foreground mb-6 leading-relaxed">{text}</p>
              ))}
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {features.map((item, index) => (
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