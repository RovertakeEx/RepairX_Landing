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
    name: "Ifham Bro",
    rating: 5,
    review: "Great place to learn mobile phone repairs! Friendly trainers, good practical sessions, and helpful support. Perfect for beginners. Highly recommended!",
    course: "Customer",
    location: "Colombo"
  },
  {
    name: "Sajadh Ahamed",
    rating: 5,
    review: "Literally this changed my life..from knowing nothing to a pro...the best in the town ❤️ #repairx #sirwaseem #thepro ❤️",
    course: "Advanced Repair Course Graduate",
    location: "Colombo"
  },
  {
    name: "Mohamed Yoonus",
    rating: 5,
    review: "A very informative and practical phone repairing course. Grateful for the hands-on experience. Highly recommended!",
    course: "Customer",
    location: "Colombo"
  },
  {
    name: "Rimas Ahmed",
    rating: 4,
    review: "The best knowledgeable teaching with guidelines ways of phone Repairing. I'm so glad to give best reviewed.",
    course: "Beginner Course Graduate",
    location: "Colombo"
  },
  {
    name: "Rinaz Najim",
    rating: 5,
    review: "Best place to study and practice mobile phone repairing they are covering everything A-Z.",
    course: "Customer",
    location: "Colombo"
  },
  {
    name: "Raseen Rdx",
    rating: 5,
    review: "Repair X: Sri Lanka's leading training center dedicated to advancing your skills. Enroll today and elevate your expertise. Highly recommended.",
    course: "Chip-Level Training Graduate",
    location: "Colombo"
  }
];

export default reviews;
