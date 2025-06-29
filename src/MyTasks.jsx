import { useEffect, useState } from 'react';
import axios from 'axios';

function MyTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/tasks/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("access")}` }
    }).then(res => {
      const myTasks = res.data.filter(t => t.assigned_to == localStorage.getItem("user_id"));
      setTasks(myTasks);
    });
  }, []);

  const updateStatus = (taskId, newStatus) => {
    axios.patch(`${process.env.REACT_APP_API_URL}/api/tasks/${taskId}/`, { status: newStatus }, {
      headers: { Authorization: `Bearer ${localStorage.getItem("access")}` }
    }).then(() => window.location.reload());
  };

  return (
    <div>
      <h2>My Tasks</h2>
      {tasks.map(t => (
        <div key={t.id}>
          <b>{t.title}</b> - {t.status}
          <select onChange={e => updateStatus(t.id, e.target.value)} defaultValue={t.status}>
            <option value="TODO">TODO</option>
            <option value="INPROGRESS">IN PROGRESS</option>
            <option value="DONE">DONE</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default MyTasks;
