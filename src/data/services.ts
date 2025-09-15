import { Smartphone, Laptop, Tablet, Cpu } from "lucide-react";

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: Smartphone,
    title: "iPhone Repair",
    description:
      "Expert iPhone repairs with original parts and advanced IC-level solutions to restore your device to peak performance.",
    features: [
      "Screen / Glass Replacement (LCD & OLED)",
      "Battery Replacement & Programming (BMS, W09 method)",
      "Face ID & TrueDepth Camera Repair",
      "Charging Port & Charging IC Repair",
      "Water Damage Recovery",
      "Logic Board (IC-level) Repairs",
    ],
  },
  {
    icon: Laptop,
    title: "MacBook Repair",
    description:
      "Professional MacBook repair services covering everything from screens to advanced logic board issues.",
    features: [
      "Screen & Keyboard Replacement",
      "Battery & Charging Repairs",
      "Water Damage Treatment",
      "Logic Board Repair (PMIC, CPU, GPU issues)",
      "Data Recovery Solutions",
    ],
  },
  {
    icon: Tablet,
    title: "iPad Repair",
    description:
      "Reliable iPad repairs with precision handling for displays, batteries, and board-level components.",
    features: [
      "Screen & Touch Digitizer Replacement",
      "Battery Replacement",
      "Charging Port Repair",
      "Board-Level Repairs",
      "Software Recovery & Updates",
    ],
  },
  {
    icon: Cpu,
    title: "Android Phone Repair",
    description:
      "Advanced Android repair services covering display, hardware, and software-level issues.",
    features: [
      "Display & Glass Replacement",
      "Battery & Charging Repairs",
      "Water Damage Service",
      "Motherboard IC-Level Repair",
      "Software Flashing & Unlocking",
    ],
  },
];
