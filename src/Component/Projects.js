import React from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "https://guarded-dusk-41374.herokuapp.com/Projects"
});

function TableProjects() {
  const [projects, setProjects] = React.useState(null);
  const RowProject = projects.map((project) => {
    return (
      <tr>
        <td>{project.ID}</td>
        <td>{project.projectname}</td>
      </tr>
    );
  });

  React.useEffect(() => {
    client.get("").then((response) => {
      setProjects(response.data.data);
    });
  }, []);
  if (!projects) return "No Post";
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name Project</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{RowProject}</tbody>
      </table>
      <ul>
        {projects.map((project) => (
          <li key={project.ID}>{project.projectname}</li>
        ))}
      </ul>
    </div>
  );
}

export default TableProjects;
