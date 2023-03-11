import './App.css';
import React, { useState, useEffect } from 'react'
import ItemList from './components/ItemList.jsx'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/list_items')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App text-center">
      <ItemList data={data} />
    </div>
  );
}

export default App;
