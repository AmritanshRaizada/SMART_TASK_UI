import { useEffect, useState } from 'react';
import axios from 'axios';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/projects/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`
      }
    }).then(res => setProjects(res.data));
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      {projects.map(p => (
        <div key={p.id}>
          <b>{p.title}</b> - {p.description}
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
