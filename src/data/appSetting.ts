import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AppSettings {
  company: {
    name: string;
    phone: string;
    email: string;
    location: string;
    hours: {
      monday_saturday: string;
      sunday: string;
    };
    poweredBy: {
      name: string;
      url: string;
    };
  };
  socials: {
    whatsapp: string;
    facebook: string;
    instagram: string;
    tiktok: string;
  };
  contactInfo: {
    icon: LucideIcon; 
    type: string;
    value: string;
    href?: string;
  }[];
}

const appSettings: AppSettings = {
  company: {
    name: "RepairX",
    phone: "+94 76 767 5694",
    email: "info@repairx.lk",
    location: "91 1st Cross St, Colombo 11",
    hours: {
      monday_saturday: "9AM - 8PM",
      sunday: "10AM - 6PM",
    },
    poweredBy: {
      name: "Rovertake",
      url: "https://rovertake.com",
    },
  },
  socials: {
    whatsapp: "https://wa.me/94767675694",
    facebook: "https://www.facebook.com/p/RepairX-61561864050406/",
    instagram: "https://instagram.com/repairx",
    tiktok: "https://www.tiktok.com/@repairxperts_",
  },
  contactInfo: [
    { icon: Phone, type: "phone", value: "+94 76 767 5694", href: "tel:+94767675694" },
    { icon: Mail, type: "email", value: "info@repairx.lk", href: "mailto:info@repairx.lk" },
    { icon: MapPin, type: "address", value: "91 1st Cross St, Colombo 11", href: "https://maps.app.goo.gl/BU9RzMYpeimk7xqQ7" },
    { icon: Clock, type: "hours", value: "Mon-Sat: 9AM-8PM\nSun: 10AM-6PM" },
  ]
};

export default appSettings;

