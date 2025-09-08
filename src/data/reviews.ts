// reviews.ts
export interface Review {
  name: string;
  rating: number; // 1 to 5
  review: string;
  course: string; // e.g., Customer or Course Graduate
  location: string;
}

const reviews: Review[] = [
  {
    name: "Kamal Perera",
    rating: 5,
    review: "Excellent service! My phone was fixed quickly and professionally. Highly recommend RepairX Colombo!",
    course: "Customer",
    location: "Colombo"
  },
  {
    name: "Samantha Fernando",
    rating: 5,
    review: "The advanced repair course was amazing. Now I can handle repairs confidently.",
    course: "Advanced Repair Course Graduate",
    location: "Colombo"
  },
  {
    name: "Nimal Jayasinghe",
    rating: 5,
    review: "Very professional and knowledgeable team. Fixed my motherboard issue perfectly.",
    course: "Customer",
    location: "Colombo"
  },
  {
    name: "Rashmi de Silva",
    rating: 4,
    review: "Great training course for beginners. Instructors are supportive and experienced.",
    course: "Beginner Course Graduate",
    location: "Colombo"
  },
  {
    name: "Tharindu Kumara",
    rating: 5,
    review: "Quick and reliable repair service. My phone works like new again!",
    course: "Customer",
    location: "Colombo"
  },
  {
    name: "Dilani Perera",
    rating: 5,
    review: "Chip-level training was top-notch. I can now run my own repair business.",
    course: "Chip-Level Training Graduate",
    location: "Colombo"
  }
];

export default reviews;
