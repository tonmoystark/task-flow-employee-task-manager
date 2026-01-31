# Employee Task Management System

## 📌 Project Overview
This is a **React-based Employee Task Management System** where an **Admin** can create and assign tasks, and **Employees** can view, accept, complete, or fail tasks. The project uses **React Context API** for global state management and **LocalStorage** for data persistence.

This project demonstrates role-based dashboards, task lifecycle handling, and client-side authentication logic.

---

## 🚀 Features

### 🔐 Authentication
- Login using email
- Role-based access (Admin / Employee)
- Session persistence with LocalStorage

### 🧑‍💼 Admin Features
- Admin dashboard
- Create and assign tasks
- View all tasks

### 👨‍💻 Employee Features
- Employee dashboard
- View assigned tasks
- Accept, complete, or fail tasks
- Task status summary

### 💾 Data Handling
- LocalStorage for employees, tasks, and session data
- Data persists after page refresh

---

## 🛠️ Tech Stack
- React (Vite)
- React Context API
- JavaScript (ES6+)
- LocalStorage API
- Tailwind CSS

---

## 📂 Project Structure

src/
│── App.jsx  
│── main.jsx  

context/
│── AuthContext.jsx  

utils/
│── LocalStorage.jsx  

pages/
│── Login.jsx  
│── AdminDashboard.jsx  
│── EmployeeDashboard.jsx  

components/
│── Header.jsx  
│── CreateTask.jsx  
│── AllTask.jsx  
│── TaskQuantity.jsx  
│── TaskContain.jsx  
│── NewTask.jsx  
│── AcceptTask.jsx  
│── CompleteTask.jsx  
│── FailedTask.jsx  

---

## 🧠 Core Logic
- **AuthContext** manages user, employees, and tasks globally
- **LocalStorage utility** syncs data across refreshes
- Admin creates tasks → Employees manage task status

---

## ▶️ Run Locally

1. Clone the repository
git clone <repo-url>

2. Install dependencies
npm install

3. Start the server
npm run dev

4. Open in browser
http://localhost:5173

---

## ⚠️ Limitations
- No backend
- No encrypted authentication
- Client-side only

---

## 🌱 Future Improvements
- Backend integration
- JWT authentication
- Protected routes
- Notifications

---

## 👤 Author
**Tonmoy**
