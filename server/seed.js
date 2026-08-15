require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');

const projectsData = [
  {
    title: 'Coal Trade — AI Marketplace',
    desc: 'A full-stack marketplace featuring AI-driven product search and recommendation via Flask APIs, with secure JWT-based multi-user authentication.',
    image: 'coaltrade.jpg',
    live: 'https://coaltrade-ai.vercel.app/',
    github: 'https://github.com/abdulmannansiddiqi',
    tags: ['React', 'Node.js', 'MongoDB', 'Flask', 'REST APIs'],
  },
  {
    title: 'Online Handmade Craft Store',
    desc: 'A robust e-commerce engine with a reactive shopping cart, scalable order management, and secure role-based multi-user access control.',
    image: 'handmade-crafts.jpg',
    live: 'http://handmade-crafts.fwh.is',
    github: 'https://github.com/abdulmannansiddiqi',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    title: 'Daycare Management System',
    desc: 'A comprehensive admin dashboard for tracking child enrollment and staff workflows, backed by highly optimized database queries for rapid retrieval.',
    image: 'daycare.jpg',
    live: 'http://daycaremanagementsystem.nfy.fyi',
    github: 'https://github.com/abdulmannansiddiqi',
    tags: ['PHP', 'MySQL', 'CSS3'],
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await Project.deleteMany({});
    console.log('Old projects cleared');

    await Project.insertMany(projectsData);
    console.log('New projects inserted successfully');

    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
}

seedDatabase();