# Mitraang

**Mitraang** is a real-time chatting application built using the **MERN stack** (MongoDB, Express, React, Node.js). It features live messaging with the help of **Socket.io**, styled with **Tailwind CSS** and **shadcn/ui**, providing a modern and seamless user experience.

---

## Features

- Real-time messaging using **Socket.io**.
- User authentication and authorization.
- Modern and responsive UI with **Tailwind CSS** and **shadcn/ui**.
- Secure backend using **JWT** for user authentication.
- Robust database management with **MongoDB**.
- Environment configuration for better deployment and development.

---

## Tech Stack

**Frontend**  
- React  
- Tailwind CSS  
- shadcn/ui  

**Backend**  
- Node.js  
- Express  
- Socket.io  

**Database**  
- MongoDB  

---

## Prerequisites

Before running the project, ensure you have the following installed on your system:

- Node.js (>= 16.x)
- npm (>= 8.x) or yarn (>= 1.22.x)
- MongoDB (>= 5.x)

---

## Environment Variables

### **Server `.env`**

```plaintext
PORT=your-port-number
JWT_KEY="your-secure-jwt-key"
ORIGIN="http://your-client-url"
DATABASE_URL="your-mongodb-connection-string"
```

### **Client `.env`**

```plaintext
VITE_SERVER_URL="http://your-backend-server-url:port"
```
## Setup and Installation

Follow these steps to set up and run the project locally.

---

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/mitraang.git
cd mitraang
```
### 2. Setting Up the Server
```bash
cd server
npm install
npm start
```
### 3. Setting Up the Client
```bash
cd ../client
npm install
npm run dev
```
### 4. Starting MongoDB
```bash
mongod
```


## Folder Structure

Folder Structure for project is listed below.

---

```bash
client/
├── public/
│   └── index.html      # Main HTML template
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Application pages
│   ├── utils/          # Helper functions
│   └── App.jsx         # Main application entry point
├── .env                # Environment variables
├── package.json        # Dependency management
└── vite.config.js      # Vite configuration



server/
├── controllers/        # Logic for handling requests
├── models/             # Mongoose schemas and models
├── routes/             # API routes
├── app.js              # Application setup and middleware
├── server.js           # Main server entry point
├── .env                # Environment variables
├── package.json        # Dependency management
└── README.md           # Documentation


```

---

## Closing

Thank you for exploring **Mitraang**, a real-time chatting application built with the MERN stack. We hope this project serves as a helpful resource and provides valuable insights into building modern, real-time web applications.

Whether you are interested in learning more about real-time communication, socket-based interactions, or scalable web applications, we encourage you to dive into the code and make it your own.

---


