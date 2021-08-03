import React, { useState, useEffect } from 'react';
import Clipboard from 'clipboard';
import EmojiItem from './EmojiItem';

export default function EmojiList({ emojies }) {
  const [copyed, setCopy] = useState(null);

  useEffect(() => {
    let clipboard = new Clipboard('.copy-to-clipboard');

    return () => clipboard.destroy();
  });

  const handleEmojiCopyClick = (value) => {
    setCopy(value);
  };

  return (
    <div className="EmojiList">
      <h3>{ (copyed && copyed !== '') ? `You copyed emoji: ${copyed}` : '' }</h3>
      <div className="list">
        {
          emojies.map((item, index) => (
            <EmojiItem
              title={item.title}
              symbol={item.symbol}
              keywords={item.keywords}
              key={index}
              onEmojiCopyClick={handleEmojiCopyClick}
            />
          ))
        }
      </div>
    </div>
  );
}
