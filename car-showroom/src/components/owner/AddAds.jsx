import React, { useState } from 'react';
import Axios from 'axios';

function AddAds() {
  const [adData, setAdData] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });

  const addAdvertisement = () => {
    Axios.post('http://localhost:5000/post-advertisement', adData)
      .then((response) => {
        console.log('Advertisement added!:', response.data);
        // Optionally reset the form
        setAdData({
          title: '',
          description: '',
          imageUrl: '',
        });
      })
      .catch((error) => {
        console.error('Error adding advertisement:', error);
      });
  };

  return (
    <div className="modern-form">
      <h2>Add Advertisements</h2>
      <form>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          value={adData.title}
          onChange={(e) => setAdData({ ...adData, title: e.target.value })}
        />
        <br />
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          value={adData.description}
          onChange={(e) => setAdData({ ...adData, description: e.target.value })}
        />
        <br />
        <label htmlFor="imageUrl">Image URL: </label>
        <input
          type="text"
          id="imageUrl"
          value={adData.imageUrl}
          onChange={(e) => setAdData({ ...adData, imageUrl: e.target.value })}
        />
        <br />
        <button type="button" onClick={addAdvertisement}>
          Add New Advertisement
        </button>
      </form>
    </div>
  );
}

export default AddAds;
