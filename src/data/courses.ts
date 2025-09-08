// courses.ts
export interface Course {
  title: string;
  description: string;
  duration: string;
  students: string;
  level: string;
  price: string;
  features: string[];
}

export const courses: Course[] = [
  {
    title: "Beginner Mobile Repair Course",
    description: "Perfect for those starting their journey in mobile repair technology",
    duration: "4 weeks",
    students: "150+",
    level: "Beginner",
    price: "Rs.15,000",
    features: [
      "Basic repair techniques",
      "Tool identification & usage",
      "Safety procedures",
      "Component recognition",
      "Simple troubleshooting"
    ]
  },
  {
    title: "Advanced Mobile Repair",
    description: "Comprehensive training for complex repairs and diagnostics",
    duration: "8 weeks",
    students: "200+",
    level: "Advanced",
    price: "Rs.25,000",
    features: [
      "Advanced diagnostics",
      "Motherboard repair",
      "IC replacement",
      "Data recovery methods",
      "Business setup guidance"
    ]
  },
  {
    title: "Chip-Level Training",
    description: "Master the art of microsoldering and chip-level repairs",
    duration: "12 weeks",
    students: "100+",
    level: "Expert",
    price: "Rs.40,000",
    features: [
      "Microsoldering techniques",
      "BGA reballing",
      "Circuit analysis",
      "Advanced equipment usage",
      "Industry certification"
    ]
  },
  {
    title: "iPhone Specialist Course",
    description: "Specialized training focused on Apple device repairs",
    duration: "6 weeks",
    students: "120+",
    level: "Intermediate",
    price: "Rs.30,000",
    features: [
      "iOS diagnostics",
      "Apple-specific tools",
      "Face ID/Touch ID repair",
      "Logic board issues",
      "Authorized techniques"
    ]
  }
];

export const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-blue-100 text-blue-800";
      case "Advanced": return "bg-orange-100 text-orange-800";
      case "Expert": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };