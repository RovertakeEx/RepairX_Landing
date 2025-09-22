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
    title: "Professional Mobile Repair Training",
    description: "Perfect for those starting their journey in mobile repair technology",
    duration: "12 days",
    students: "200+",
    level: "Professional",
    price: "Rs.55,000",
    features: [
      "Basic repair techniques",
      "Tool identification & usage",
      "Safety procedures",
      "Component recognition",
      "Simple troubleshooting",
      "And more 50+ topics"
    ]
  },
  {
    title: "Advanced Mobile Repair Training",
    description: "Comprehensive training for complex repairs and diagnostics",
    duration: "4 weeks",
    students: "100+",
    level: "Advanced",
    price: "Rs.84,000",
    features: [
      "Basic Electronics and Live testing",
      "Schemetic and Block diagrams",
      "Power flow tracing e.g. Battery => VPH_PWR => PMU => SOC",
      "Data recovery methods",
      "Business setup guidance",
      "And more 100+ topics"
    ]
  },
  {
    title: "iPhone Specialist Training",
    description: "Specialized training focused on Apple device repairs",
    duration: "7 days",
    students: "50+",
    level: "Apple",
    price: "Rs.90,000",
    features: [
      "Face to Face Training",
      "Glass Refurbishment",
      "Face ID repair",
      "Battery BMS swap",
      "And more techniques"
    ]
  },
  {
  title: "Master iPhone Repair Training",
  description: "Elite-level program for mastering Apple device repairs, conducted by Indian masters",
  duration: "3 weeks",
  students: "20+",
  level: "Expert",
  price: "Rs.280,000",
  features: [
    "Advanced motherboard repair",
    "Data recovery & NAND programming",
    "Micro-soldering techniques",
    "Panic and CPU pads recover",
    "And more 150+ professional topics"
  ]
}
];

export const getLevelColor = (level: string) => {
    switch (level) {
      case "Professional": return "bg-green-100 text-green-800";
      case "Apple": return "bg-blue-100 text-blue-800";
      case "Advanced": return "bg-orange-100 text-orange-800";
      case "Expert": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };