import React from "react";
import axios from "axios";
import { Button } from "reactstrap";


const client = axios.create({
  baseURL : "http://localhost:8080/project"
});

function TableProjects(props) {
  const [projects, setProjects] = React.useState(null);
  // const handleDelete = id

  React.useEffect(() => {
    client.get("").then((response) => {
      setProjects(response.data.data);
    });
  }, []);
  var i = 1
  if (!projects) return "No Post";
   const RowProject = projects.map((project) => {
    return (
      <tr key={project.ID}>
        <td >{i++}</td>
        <td>{project.projectname}</td>
        <td>
          <Button onClick={() => props.BtnUpdate("yap",project.ID)} color="primary">Update</Button>
          {' '}
          <Button onClick={()=> props.BtnShow(project.ID)} color="warning">Show</Button>
          {' '}
          {/* <Button onClick={()=>props.BtnDelete(project.ID)} color="danger">Delete</Button> */}
          <Button onClick={()=> (window.confirm('Yakin ingin menghapus Project ini ? ') )}color="danger">Delete</Button>  
        </td>
      </tr>
    );
  });
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
      {/* <ul>
        {projects.map((project) => (
          <li key={project.ID}>{project.projectname}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default TableProjects;
