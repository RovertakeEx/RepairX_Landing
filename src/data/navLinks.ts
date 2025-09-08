// navLinks.ts
export interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Courses", href: "#courses" },
  { name: "Contact", href: "#contact" },
];

export default navLinks;
