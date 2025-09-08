import { useState } from 'react'
import { GraduationCap, Clock, Users, Award } from "lucide-react";
import CourseDialog from "./dialogs/CourseDialog";
import { courses, getLevelColor } from '../data/courses';

const Courses = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleCourseClick = (courseName: string) => {
    setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-repairx-light-gray" id="courses">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Training <span className="text-repairx-yellow">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional mobile repair training courses designed to build your expertise from basic repairs to advanced chip-level techniques. Learn from industry experts with hands-on experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="rounded-lg border text-card-foreground shadow-sm border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card">
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className={`inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 text-xs font-semibold px-2 py-1 ${getLevelColor(course.level)}`}>
                      {course.level}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-repairx-yellow">{course.price}</div>
                    </div>
                  </div>
                  <h3 className="tracking-tight text-xl font-bold text-card-foreground">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                </div>
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center"><Clock className="h-4 w-4 mr-1 text-repairx-yellow"/> {course.duration}</div>
                    <div className="flex items-center"><Users className="h-4 w-4 mr-1 text-repairx-yellow"/> {course.students} enrolled</div>
                  </div>
                  <ul className="space-y-2 mb-6 mt-3 ">
                      {course.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-muted-foreground">
                            <Award className="w-4 h-4 text-repairx-yellow mr-3 flex-shrink-0"/>
                            {feature}
                          </li>
                      ))}   
                  </ul>
                  <button className="inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-sm [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full bg-repairx-yellow hover:bg-repairx-yellow-dark text-repairx-black font-semibold transition-colors duration-200" onClick={() => handleCourseClick(course.title)}>
                    <GraduationCap/> 
                    Join Course
                  </button>
                </div>
            </div>
          ))}
        </div>
      </div>
      <CourseDialog isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} courseName={selectedCourse}/>
    </section>
  )
}

export default Courses