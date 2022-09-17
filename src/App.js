import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [articles, setArticles] = useState([]);

  async function fetchArticlesHandler(){
    const response = await fetch('http://localhost:8081');
    let data = await response.json();

    data = data => {
        return {
          Developer: data.Developer,
          Project: data.Project
        };
    };

    setArticles(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await axios.get('http://localhost:8081');
    setArticles(response.data);
  };

  return (
    <div>{articles?.Developer}-{articles?.Project}</div>
  );
}

export default App;


