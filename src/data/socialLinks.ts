import { MessageCircle, Facebook, Instagram, Music2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;   // type for lucide-react icons
  href: string;
  label: string;
  hoverColor: string;
}

const socialLinks : SocialLink[] = [
  {
    icon: MessageCircle,
    href: "https://wa.me/919876543210",
    label: "WhatsApp",
    hoverColor: "hover:text-green-500",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/repairx",
    label: "Facebook",
    hoverColor: "hover:text-blue-600",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/repairx",
    label: "Instagram",
    hoverColor: "hover:text-pink-600",
  },
  {
    icon: Music2,
    href: "https://tiktok.com/@repairx",
    label: "TikTok",
    hoverColor: "hover:text-purple-600",
  },
];

export default socialLinks;
