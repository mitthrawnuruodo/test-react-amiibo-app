import React, { useState, useEffect } from 'react';
import AmiiboList from './components/AmiiboList';

const App = () => {
  const [amiibos, setAmiibos] = useState([]);

  useEffect(() => {
    fetch('https://www.amiiboapi.com/api/amiibo/')
      .then((response) => response.json())
      .then((data) => setAmiibos(data.amiibo.slice(0, 20))) // Limit to 20 items for simplicity
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Amiibo Collection</h1>
      <AmiiboList amiibos={amiibos} />
    </div>
  );
};

export default App;