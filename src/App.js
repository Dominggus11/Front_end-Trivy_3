import React from 'react'
import axios from 'axios'
import './App.css'
import TableProjects from './Component/misconfiguration/tables';
import BtnCreate from './Component/misconfiguration/create';
import Header from './Component/Header/header';
const client =  axios.create({
  // baseURL : "http://localhost:8080/project"
  baseURL : "http://localhost:8080/project"
});
function App() {
  const [project, setproject] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    client
    .get(``)
    .then((response) =>{
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
      window.location.reload();
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
      window.location.reload();
    });
  }

  function GetProject($id) {
    client
    .get(`/`+$id)
    .then((response)=>{
      setproject(response.data.data);
      console.log($id)
    });
    // window.location.reload();
  }
  function Reload() {
    window.location.reload();
  }
  
  if (error) return `Error : ${error.message}`;
  if (!project) return "No Post"
   return (
    <div className='App'>
      <Header />
      {/* <BtnCreate Btncreate = {Createproject}/>
      <TableProjects 
        BtnUpdate = {Putproject} 
        BtnDelete = {Deleteproject} 
        BtnShow = {GetProject} 
        Refresh = {Reload}
      /> */}
     
    </div>
  )
}

export default App;