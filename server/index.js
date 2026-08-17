require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const contactRoute = require('./routes/contact');
const projectsRoute = require('./routes/projects');
const chatRoute = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "https://portfolio-mern-a.vercel.app",
  "http://localhost:5173"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.use('/api/contact', contactRoute);
app.use('/api/projects', projectsRoute);
app.use('/api/chat', chatRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});