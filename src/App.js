import React from 'react'
import axios from 'axios'
import './App.css'
import TableProjects from './Component/tables';
import BtnCreate from './Component/create';
const baseURL = "https://guarded-dusk-41374.herokuapp.com/Projects"
const client =  axios.create({
  baseURL : "https://guarded-dusk-41374.herokuapp.com/Project"
});
function App() {
  const [project, setproject] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) =>{
      setproject(response.data.data);
    }).catch(error => {
      setError(error);
    });
    
  },[]);

  function Createproject($name) {
    client
    .post(``, {
      projectname : $name
    })
    .then((response)=>{
      setproject(response.data.data);
    });
    
  }

  function Putproject($name,$id) {
    client
    .put(`/`+$id, {
      projectname : $name
    })
    .then((response)=>{
      setproject(response.data.data);
    });
    // window.location.reload();
  }

  function Deleteproject($id) {
    client
    .delete(`/`+$id)
    .then((response)=>{
      setproject(response.data.data);
    });
    // window.location.reload();
  }

  function GetProject($id) {
    client
    .get(`/`+$id)
    .then((response)=>{
      setproject(response.data.data);
    });
    // window.location.reload();
  }
  function Reload(_) {
    window.location.reload();
  }
  
  if (error) return `Error : ${error.message}`;
  if (!project) return "No Post"
  


   return (
    <div className='App'>
      <h1 color=''>Trivy Misconfig</h1>
      <BtnCreate Btncreate = {Createproject}/>
      <TableProjects 
        BtnUpdate = {Putproject} 
        BtnDelete = {Deleteproject} 
        BtnShow = {GetProject} 
        Refresh = {Reload}
        
      />
     
    </div>
  )
}

export default App;