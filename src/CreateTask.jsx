import { useState, useEffect } from 'react';
import axios from 'axios';

function CreateTask() {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    title: "", description: "", status: "TODO", due_date: "", assigned_to: "", project: ""
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/users/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`
      }
    })
    .then(res => setUsers(res.data))
    .catch(err => console.error("Error loading users", err));

    axios.get(`${process.env.REACT_APP_API_URL}/api/projects/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`
      }
    })
    .then(res => setProjects(res.data))
    .catch(err => console.error("Error loading projects", err));
  }, []);

const create = () => {
  console.log("Submitting form:", form); // ✅ Log the payload
  axios.post("https://smart-taks-backend.onrender.com/api/tasks/", form, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access")}`
    }
  })
  .then(() => alert("Task created!"))
  .catch(err => {
    console.error("Create task error:", err.response?.data || err.message);
    alert("Failed to create task");
  });
}


  return (
    <div>
      <h2>Create Task</h2>
      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} /><br />
      <textarea placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })}></textarea><br />
      <input type="date" onChange={e => setForm({ ...form, due_date: e.target.value })} /><br />
      <select onChange={e => setForm({ ...form, assigned_to: e.target.value })}>
        <option>Select Assignee</option>
        {users.map(u => <option key={u.id} value={u.id}>{u.username}</option>)}
      </select><br />
      <select onChange={e => setForm({ ...form, project: e.target.value })}>
        <option>Select Project</option>
        {projects.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
      </select><br />
      <button onClick={create}>Create</button>
    </div>
  );
}

export default CreateTask;
