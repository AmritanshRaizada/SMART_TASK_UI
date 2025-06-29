📘 Smart Task Tracker – UI
This is the React frontend for the Smart Task Tracker project – a task management system with JWT authentication, project-based task tracking, and role-based access.

🎯 Designed to test the backend APIs using a minimal but functional interface.

🖥️ Features
🔐 JWT Login (SimpleJWT)

📋 View Projects (admin & contributor)

🛠️ Create Tasks (admin only)

✅ View & Update Assigned Tasks (contributor)

📜 View Activity Log (admin only)

🔄 Fully integrated with Django REST Framework API

🚀 Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/smart-task-ui.git
cd smart-task-ui
2. Install dependencies
bash
Copy
Edit
npm install
3. Configure Backend API URL (Optional)
Create a .env file if you plan to deploy:

env
Copy
Edit
REACT_APP_API_URL=https://your-django-api.onrender.com
Then update API calls like:

js
Copy
Edit
axios.get(`${process.env.REACT_APP_API_URL}/api/projects/`)
4. Run the app
bash
Copy
Edit
npm start
App runs at http://localhost:3000

📂 Folder Structure
pgsql
Copy
Edit
src/
├── App.jsx
├── Login.jsx
├── ProjectList.jsx
├── CreateTask.jsx
├── MyTasks.jsx
├── ActivityLog.jsx
├── index.js
🔗 Backend API Repo
Make sure your backend is up and running:
👉 Smart Task Tracker – Django API

✅ Admin Credentials
To test the full UI, login with:

txt
Copy
Edit
username: amritansh
password: *********
(Replace with your actual superuser credentials)

📜 License
This project is for educational use and internship submission only.

