import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ViewAds() {
  const [advertisement, setAdvertisement] = useState(null);

  useEffect(() => {
    Axios.get('http://localhost:5000/advertisement')
      .then((response) => {
        setAdvertisement(response.data.data.advertisement);
      })
      .catch((error) => {
        console.error('Error fetching advertisement:', error);
      });
  }, []); // Add an empty dependency array to run the effect only once on mount

  if (!advertisement) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{advertisement.title}</h2>
      <p>{advertisement.description}</p>
      <img src={advertisement.imageUrl} alt={advertisement.title} />
    </div>
  );
}

export default ViewAds;
