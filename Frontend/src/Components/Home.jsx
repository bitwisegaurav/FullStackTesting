import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => setJsonData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default Home;
