import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function ViewAds({ match }) {
  const [advertisement, setAdvertisement] = useState(null);

  useEffect(() => {
    const advertisementId = match.params.id;

    Axios.get(`http://localhost:5000/advertisement/${advertisementId}`)
      .then((response) => {
        setAdvertisement(response.data.data.advertisement);
      })
      .catch((error) => {
        console.error('Error fetching advertisement:', error);
      });
  }, [match.params.id]);

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
