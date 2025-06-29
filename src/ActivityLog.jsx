import { useEffect, useState } from 'react';
import axios from 'axios';

function ActivityLog() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/logs/", {
      headers: { Authorization: `Bearer ${localStorage.getItem("access")}` }
    }).then(res => setLogs(res.data));
  }, []);

  return (
    <div>
      <h2>Activity Log</h2>
      {logs.map(log => (
        <div key={log.id}>
          Task: {log.task} | Previous Assignee: {log.prev_assignee} | Previous Status: {log.prev_status} | Previous Due Date: {log.prev_due_date}
        </div>
      ))}
    </div>
  );
}

export default ActivityLog;