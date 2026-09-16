require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');

const projectsData = [
  {
    title: 'Madina Model School Website',
    desc: 'A full production website for a real school, featuring a secure JWT-authenticated admin panel for staff-managed content and a multi-service cloud deployment.',
    image: 'madina-school.png',
    live: 'https://madina-school-website.vercel.app',
    github: 'https://github.com/abdulmannansiddiqi/madina-school-website',
    tags: ['Next.js', 'Node.js', 'Express', 'MySQL'],
  },
  {
    title: 'Coal Trade — AI Marketplace',
    desc: 'A full-stack marketplace featuring AI-driven product search and recommendation via Flask APIs, with secure JWT-based multi-user authentication.',
    image: 'coaltrade.jpg',
    live: 'https://coaltrade-ai.vercel.app/',
    github: 'https://github.com/abdulmannansiddiqi',
    tags: ['React', 'Node.js', 'MongoDB', 'Flask', 'REST APIs'],
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