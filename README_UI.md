# 📘 Smart Task Tracker – UI

This is the **React frontend** for the Smart Task Tracker – a full-stack task management system featuring JWT-based authentication, project-task nesting, and activity logs.

> 🎯 This UI is designed to test backend APIs in a minimal and functional interface.

---

## 🖥️ Features

- 🔐 JWT Login using SimpleJWT
- 📋 View all Projects (admin & contributor)
- 🛠️ Admin can Create Tasks and assign users
- ✅ Contributors can view and update their own tasks
- 📜 Admins can view Activity Logs for task changes
- ⚙️ Fully integrated with Django REST Framework backend

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/smart-task-ui.git
cd smart-task-ui
```

### 2. Install dependencies

```bash
npm install
```

### 3. (Optional) Set backend URL using `.env`

```env
REACT_APP_API_URL=http://localhost:8000
```

Update your axios calls like this:
```js
axios.get(`${process.env.REACT_APP_API_URL}/api/projects/`)
```

### 4. Run the app

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure

```
src/
├── App.jsx              # Routes and Navigation
├── Login.jsx            # JWT login
├── ProjectList.jsx      # View all projects
├── CreateTask.jsx       # Admin: Create and assign tasks
├── MyTasks.jsx          # Contributor: View/update assigned tasks
├── ActivityLog.jsx      # Admin: View activity log
├── index.js             # React DOM root
```

---

## 🔗 Backend API

Make sure the Django backend is running at:
```
http://localhost:8000
```
Or deploy it to:
```
https://your-backend.onrender.com
```

---

## 🔐 Demo Credentials

```txt
👑 Admin Login:
Username: amritansh
Password: ********

👤 Contributor Login:
Username: contributor
Password: ********
```

---

## 📜 License

This project was built as part of a full-stack internship assignment and is intended for educational/demo purposes.