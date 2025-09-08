import { Users, Award, CheckCircle, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const aboutText: string[] = [
  "We specialize in advanced mobile phone repairs and professional training courses to build your future in mobile technology. With years of industry experience, we provide cutting-edge repair solutions and comprehensive education programs.",
  "Our expert team combines technical expertise with practical training to ensure you receive the highest quality service and education in mobile device repair technology."
];

export const stats: Stat[] = [
  { icon: Users, value: "1000+", label: "Students Trained" },
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: CheckCircle, value: "98%", label: "Success Rate" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

export const features: string[] = [
  "Advanced diagnostic equipment and tools",
  "Certified professional instructors",
  "Industry-standard repair techniques",
  "Comprehensive training curriculum",
  "Ongoing support and mentorship",
];