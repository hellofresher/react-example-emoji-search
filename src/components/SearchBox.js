import React, { useState } from 'react';

export default function SearchBox({ onSearchChange }) {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="SearchBox">
      <input
        type="text"
        name="search"
        value={keyword}
        onChange={handleChange}
      />
    </div>
  );
}
