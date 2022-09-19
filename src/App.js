import React from 'react'
import axios from 'axios'
import './App.css'
import { Button } from 'reactstrap';
import TableProjects from './Component/Projects';

const client =  axios.create({
  baseURL : "https://guarded-dusk-41374.herokuapp.com/Project"
});
function App() {
  const [project, setproject] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    client.get("/3").then((response) =>{
      setproject(response.data.data);
    }).catch(error => {
      setError(error);
    });
    
  },[]);

  function createproject() {
    client
    .post( {
      projectname : "Project V6"
    })
    .then((response)=>{
      setproject(response.data.data);
    });
  }

  function putproject() {
    client
    .put(`/4`, {
      projectname : "Rdam"
    })
    .then((response)=>{
      setproject(response.data.data);
    });
  }

  function deleteproject() {
    client
    .delete(`/1`)
    .then((response)=>{
      setproject(response.data.data);
    });
  }

  if (error) return `Error : ${error.message}`;
  if (!project) return "No Post"
  


   return (
    <div className='App'>
      <h1 >Trivy Misconfig</h1>
      <p>ID Project : {project.ID}</p>
      <p>Nama Project :{project.projectname}</p>
      <TableProjects/>
      <Button color='primary' onClick={createproject}>Create project</Button>
      <br></br>
      <br></br>
      <Button color='success' onClick={putproject}>Update project</Button>
      <br></br>
      <br></br>
      <Button color='danger' onClick={deleteproject}>Delete project</Button>
    </div>
  )
}

export default App;