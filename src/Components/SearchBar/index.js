

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './index.css';

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!location.trim()) {
      setError('Location cannot be empty.');
    } else if (location.trim().length < 3) {
      setError('Location must be at least 3 characters long.');
    } else {
      setError('');
      onSearch(location.trim());
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city or zip code"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
          setError('');
        }}
      />
      <button onClick={handleSearch}><FaSearch /> Search</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default SearchBar;

