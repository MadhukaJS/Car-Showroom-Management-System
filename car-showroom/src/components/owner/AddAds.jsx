// Import React and any other necessary libraries
import React, { useState } from 'react';

// Advertisements component
const AddAds = () => {
    // State to store advertisement data
    const [adData, setAdData] = useState({
        title: '',
        description: '',
        imageUrl: '',
    });

    // Function to handle form input changes
    const handleChange = (e) => {
        setAdData({
            ...adData,
            [e.target.name]: e.target.value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to save advertisement data (e.g., send to a server or update state)
        console.log('Advertisement added:', adData);
        // Reset form fields
        setAdData({
            title: '',
            description: '',
            imageUrl: '',
        });
    };

    return (
        <div>
            <h2>Add Advertisement</h2>
            <form onSubmit={handleSubmit} className="modern-form">
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={adData.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={adData.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Image URL:
                    <input
                        type="text"
                        name="imageUrl"
                        value={adData.imageUrl}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Add Advertisement</button>
            </form>
        </div>
    );
};


export default AddAds;
