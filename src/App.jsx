import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import ProjectList from './ProjectList';
import CreateTask from './CreateTask';
import MyTasks from './MyTasks';
import ActivityLog from './ActivityLog';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState(localStorage.getItem("access"));

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Projects</Link> | 
          <Link to="/create-task">Create Task</Link> | 
          <Link to="/my-tasks">My Tasks</Link> | 
          <Link to="/activity-log">Activity Log</Link>
        </nav>
        <Routes>
          <Route path="/" element={token ? <ProjectList /> : <Login setToken={setToken} />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/my-tasks" element={<MyTasks />} />
          <Route path="/activity-log" element={<ActivityLog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;