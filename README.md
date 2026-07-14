# Sai Lakshya Talkies & Events

An elegant, premium web application for booking private theatres and events. redifining the private celebration experience with luxury soundproof chambers, 4K projection, customizable themes/decorations, and royal hospitality.

---

## 🚀 Technology Stack
- **Frontend**: React (TypeScript), Vite, TailwindCSS, Lucide Icons, Recharts (Analytics).
- **Backend**: Node.js, Express.js (RESTful API), Mongoose (MongoDB).
- **Database**: MongoDB (Atlas for Production, Localhost for Dev).
- **Payments**: Razorpay Integration (Order generation & signature verification).

---

## 🛠️ Local Installation & Development

### 1. Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or a remote Atlas connection string)

### 2. Install Dependencies
Clone the project and install dependencies for both frontend and backend:
```bash
npm run install:all
```
This single command runs `npm install` in the root (frontend) and nested `backend` directories.

### 3. Environment Setup

#### Root Directory (`.env` for frontend):
Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000/api
```

#### Backend Directory (`backend/.env` for backend):
Create a `.env` file inside the `backend` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sai-lakshya
JWT_SECRET=your_jwt_secret_key_here
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### 4. Seed the Database
Seed the database with default theatre rooms and the admin account:
```bash
npm run backend:seed
```

### 5. Running the Application
To run both the frontend and backend simultaneously in development mode:
```bash
npm run dev:full
```
- Frontend will be available at: `http://localhost:3000`
- Backend API will be available at: `http://localhost:5000`

---

## 📂 Project Structure

```
├── backend/                  # Express.js REST API
│   ├── config/               # Database connection config
│   ├── middleware/           # Auth & Error handling middlewares
│   ├── models/               # Mongoose Schemas (User, Room, Booking)
│   ├── routes/               # API Router Handlers (auth, bookings, rooms, payments)
│   ├── scripts/              # DB Seeding scripts
│   └── server.js             # API Server entry point
├── components/               # Shared frontend React components
├── pages/                    # Frontend page views (Home, BookingPage, AdminDashboard)
├── src/
│   └── services/             # Axios API services client
├── App.tsx                   # Main React app configuration & routing
├── index.html                # App entry html
├── vercel.json               # SPA routing rewrite for Vercel
└── vite.config.ts            # Vite build & local proxy config
```

---

## 🌐 Production Deployment Guide

Follow these steps to deploy the application in production:

### 1. Database: MongoDB Atlas
1. Sign up for a free account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a Shared Cluster (Free Tier) and select your preferred cloud provider and region.
3. Under **Network Access**, add IP `0.0.0.0/0` (or your backend's specific hosting IPs) to allow connections.
4. Under **Database Access**, create a database user with a secure password.
5. Click **Connect** -> **Drivers** to copy your MongoDB Connection String. Replace `<password>` and database name in the connection string.
   - Example: `mongodb+srv://username:password@cluster0.abcde.mongodb.net/sai-lakshya?retryWrites=true&w=majority`

### 2. Backend: Render
1. Sign up at [Render](https://render.com/).
2. Create a new **Web Service** and link it to your GitHub Repository.
3. Configure the following settings:
   - **Environment**: `Node`
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add the following **Environment Variables** in Render's dashboard:
   - `MONGODB_URI`: *Your MongoDB Atlas connection string*
   - `JWT_SECRET`: *A secure random string*
   - `RAZORPAY_KEY_ID`: *Your live/test Razorpay API key ID*
   - `RAZORPAY_KEY_SECRET`: *Your live/test Razorpay API key secret*
   - `PORT`: `10000` (Render handles port routing automatically, but it defaults to 10000)
5. Copy the generated Web Service URL (e.g., `https://sai-lakshya-backend.onrender.com`).

### 3. Frontend: Vercel
1. Sign up at [Vercel](https://vercel.com/).
2. Add a new project and import your GitHub Repository.
3. Configure the following build settings:
   - **Framework Preset**: `Other` (Vercel auto-detects Vite)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. In the project settings, add the following **Environment Variable**:
   - `VITE_API_URL`: `https://your-render-api-url.onrender.com/api` (The backend URL you copied from Render)
5. Click **Deploy**. Vercel will build the frontend and serve it with client-side SPA routing as defined in `vercel.json`.
