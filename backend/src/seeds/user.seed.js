import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const languages = [
  'Arabic',
  'Bengali',
  'English',
  'Spanish',
  'French',
  'Hindi',
  'Portuguese',
  'Russian',
  'Urdu',
  'Chinese',
];

const getRandomLang = () => {
  return languages[Math.floor(Math.random() * languages.length)];
};

const seedUsers = [
  // Female Users
  {
    email: "emma.thompson@example.com",
    fullName: "Emma Thompson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "olivia.miller@example.com",
    fullName: "Olivia Miller",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "sophia.davis@example.com",
    fullName: "Sophia Davis",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "ava.wilson@example.com",
    fullName: "Ava Wilson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "isabella.brown@example.com",
    fullName: "Isabella Brown",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "mia.johnson@example.com",
    fullName: "Mia Johnson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "charlotte.williams@example.com",
    fullName: "Charlotte Williams",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "amelia.garcia@example.com",
    fullName: "Amelia Garcia",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },

  // Male Users
  {
    email: "james.anderson@example.com",
    fullName: "James Anderson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "william.clark@example.com",
    fullName: "William Clark",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "benjamin.taylor@example.com",
    fullName: "Benjamin Taylor",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "lucas.moore@example.com",
    fullName: "Lucas Moore",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "henry.jackson@example.com",
    fullName: "Henry Jackson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "alexander.martin@example.com",
    fullName: "Alexander Martin",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "daniel.rodriguez@example.com",
    fullName: "Daniel Rodriguez",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  
  // Additional users (40 more users)
  {
    email: "john.doe@example.com",
    fullName: "John Doe",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/8.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "jane.doe@example.com",
    fullName: "Jane Doe",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/9.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "michael.smith@example.com",
    fullName: "Michael Smith",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "susan.jones@example.com",
    fullName: "Susan Jones",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "paul.white@example.com",
    fullName: "Paul White",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "emily.martinez@example.com",
    fullName: "Emily Martinez",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "david.johnson@example.com",
    fullName: "David Johnson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "jennifer.brown@example.com",
    fullName: "Jennifer Brown",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "chris.garcia@example.com",
    fullName: "Chris Garcia",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "karen.miller@example.com",
    fullName: "Karen Miller",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "george.hall@example.com",
    fullName: "George Hall",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "barbara.moore@example.com",
    fullName: "Barbara Moore",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "matthew.jackson@example.com",
    fullName: "Matthew Jackson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "sandra.martin@example.com",
    fullName: "Sandra Martin",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/15.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
  {
    email: "brian.smith@example.com",
    fullName: "Brian Smith",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
    nativeLang: getRandomLang(),
    langToLearn: getRandomLang(),
  },
];

const seed = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Users seeded successfully!");
  } catch (err) {
    console.error("Error seeding users:", err);
  } finally {
    process.exit();
  }
};

seed();
