import React from 'react';
import AmiiboCard from './AmiiboCard';

const AmiiboList = ({ amiibos }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {amiibos.map((amiibo) => (
        <AmiiboCard key={amiibo.head + amiibo.tail} amiibo={amiibo} />
      ))}
    </div>
  );
};

export default AmiiboList;