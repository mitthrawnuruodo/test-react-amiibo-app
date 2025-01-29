import React, { useState } from 'react';

const AmiiboCard = ({ amiibo }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px',
        width: '200px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      {isFlipped ? (
        <div>
          <p><strong>Series:</strong> {amiibo.amiiboSeries}</p>
          <p><strong>Release Date:</strong> {amiibo.release?.jp || 'N/A'}</p>
        </div>
      ) : (
        <div>
          <img src={amiibo.image} alt={amiibo.name} style={{ width: '100px' }} />
          <h3>{amiibo.name}</h3>
        </div>
      )}
    </div>
  );
};

export default AmiiboCard;