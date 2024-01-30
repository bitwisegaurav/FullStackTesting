import { useState } from 'react';
import axios from 'axios';

const Storage = () => {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSaveName = () => {
    const value = name;
    if(value.trim() === '') return;
    // axios.post('http://localhost:5000/api/store', { name })
    //   .then(() => {
    //     // console.log(response.data);
    //     setName('');
    //   })
    //   .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Storage Page</h1>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={handleNameChange} />
        <button onClick={handleSaveName}>Save</button>
      </div>
    </div>
  );
};

export default Storage;
