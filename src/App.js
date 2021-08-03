import React, { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import EmojiList from './components/EmojiList';
import { filterEmoji } from './util/filterUtil';
import './App.css';

function App() {
  const [emojies, setEmoji] = useState(filterEmoji('', 20));

  useEffect(() => {
    // setEmoji(filterEmoji('', 20));
  });

  const handleSearchChange = (value) => {
    setEmoji(filterEmoji(value, 20));
  };

  return (
    <div className="App">
      <div className="App__header">
        <h1 className="App__heading">Emoji Search</h1>
        <SearchBox onSearchChange={handleSearchChange} />
      </div>
      <div className="App__main">
        <EmojiList emojies={emojies} />
      </div>
    </div>
  );
}

export default App;
