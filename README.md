# Abdul Mannan Siddiqi — Portfolio (MERN Stack)

A fully dynamic, full-stack developer portfolio built with the MERN stack — featuring an AI-powered chatbot, a database-driven projects section, and a working contact form.

🔗 **Live Site:** [portfolio-mern-a.vercel.app](https://portfolio-mern-a.vercel.app)
🔗 **Backend API:** [ams-portfolio-backend-2026.bonto.run](https://ams-portfolio-backend-2026.bonto.run)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)

---

## ✨ Features

- **AI Chatbot** — Floating chat widget powered by Google Gemini (`@google/genai`), trained with a custom system prompt covering my skills, projects, and experience — so visitors can literally "ask" my portfolio questions.
- **Dynamic Projects Section** — Projects are stored in MongoDB Atlas and fetched live via a REST API, not hardcoded — updating my work is as simple as updating the database.
- **Working Contact Form** — Sends real emails via Nodemailer (SMTP), replacing a third-party form service.
- **Polished Animations** — Particle background and typewriter effect in the Hero section, smooth scroll progress bar, back-to-top button, and a custom loader.
- **WhatsApp Quick-Contact** — Floating button for instant messaging.
- **Downloadable Resume** — One-click PDF resume access from the navbar.
- **Fully Responsive** — Built mobile-first across all breakpoints.

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- CSS3 / Custom animations
- Deployed on **Vercel**

**Backend**
- Node.js + Express.js
- MongoDB Atlas + Mongoose
- Nodemailer (contact form emails)
- Google Gemini API (`@google/genai`) for the AI chatbot
- Deployed on **Bonto.dev**

---

## 📁 Project Structure

This is a monorepo containing both the frontend and backend:

```
portfolio-mern-a/
├── client/              # React + Vite frontend
│   ├── src/
│   │   ├── components/  # Navbar, Hero, About, Skills, Projects, Contact,
│   │   │                # Footer, ChatWidget, WhatsAppFloat, BackToTop, Loader...
│   │   └── ...
│   └── public/
│       └── resume.pdf
│
├── server/              # Express backend
│   ├── routes/
│   │   ├── contact.js   # Nodemailer contact form endpoint
│   │   ├── projects.js  # MongoDB-backed projects endpoint
│   │   └── chat.js      # Gemini AI chatbot endpoint
│   ├── models/
│   │   └── Project.js
│   ├── seed.js
│   └── index.js
│
└── package.json         # Root-level script for deployment (Bonto)
```

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repo
```bash
git clone https://github.com/abdulmannansiddiqi/portfolio-mern-a.git
cd portfolio-mern-a
```

### 2. Backend setup
```bash
cd server
yarn install
```

Create a `.env` file inside `server/` with:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password
GEMINI_API_KEY=your_google_gemini_api_key
```

Run the backend:
```bash
node index.js
```

### 3. Frontend setup
```bash
cd client
yarn install
```

Create a `.env` file inside `client/` with:
```env
VITE_API_URL=http://localhost:5000
```

Run the frontend:
```bash
yarn dev
```

---

## 📬 Contact

**Abdul Mannan Siddiqi**
Full Stack Developer — Lahore, Pakistan

- 📧 abdulmannansiddiqi7@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/abdulmannansiddiqi/)
- 🐙 [GitHub](https://github.com/abdulmannansiddiqi)

---

⭐ If you like this project, consider giving it a star on GitHub!