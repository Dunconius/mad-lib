import React, { useState } from 'react';
import axios from 'axios';

const ImageSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?query=${keyword}&client_id=dJ12kdzLu-CpwSNPT4oA4xXc9AXZwNAHiCPwsRhObsc`
      );
      setImageUrl(response.data.urls.regular);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {imageUrl && <img src={imageUrl} alt="Search Result" />}
    </div>
  );
};

export default ImageSearch;
