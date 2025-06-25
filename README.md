# MERN URL Shortener 🚀

A production-grade URL shortener built with **MongoDB, Express, React, and Node.js (MERN stack)**.

## 🌐 Features

- Generate short URLs from long links
- Custom code support for short URLs
- Click tracking
- MongoDB TTL to auto-expire links after 90 days
- Dockerized backend and frontend
- Deployment-ready for Render & Vercel

---

## 📁 Folder Structure

```
mern-url-shortener/
├── server/     # Node.js + Express backend
│   ├── src/
│   ├── .env.example
│   ├── Dockerfile
│   └── package.json
├── client/     # React + Vite frontend
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## 🛠️ Local Development

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/mern-url-shortener.git
cd mern-url-shortener
```

### 2. Set up environment variables
```bash
cp server/.env.example server/.env
# Edit server/.env with your MongoDB URI and BASE_URL
```

### 3. Run the app (backend + frontend)
```bash
# Start backend
npm install --prefix server
npm run dev --prefix server

# Start frontend
npm install --prefix client
npm run dev --prefix client
```

- Backend: http://localhost:8080
- Frontend: http://localhost:5173

---

## 🐳 Run with Docker

```bash
docker compose up --build -d
```

---

## 🌍 Deployment

### 🔸 Backend (Render)

- Create a new **Web Service** from `server/`
- Add environment variables:
  - `PORT = 8080`
  - `MONGO_URI = <your MongoDB URI>`
  - `BASE_URL = https://short.ly`

### 🔸 Frontend (Vercel)

- Import `client/` folder
- Set environment variable:  
  `VITE_API_URL=https://your-backend-service.onrender.com/api`

---

## ✅ Example .env for server

```env
PORT=8080
MONGO_URI=mongodb+srv://admin:yourpassword@cluster0.mongodb.net/url_shortener?retryWrites=true&w=majority
BASE_URL=http://localhost:8080
```

---

## 🛡 Security & Improvements

- Helmet + rate-limiting middleware recommended
- ESLint & Prettier for code quality
- Add JWT auth if needed for future expansion
- Use Redis for caching redirects if scaling up

---

## 📄 License

MIT

---

> Built with ❤️ by [Your Name] – Add this to your portfolio or contribute improvements!
