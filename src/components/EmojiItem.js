import { useState } from 'react';

export default function EmojiItem({
  title,
  symbol,
  keywords,
  onEmojiCopyClick
}) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(! active);

    onEmojiCopyClick(symbol);

    setTimeout(() => {
      setActive(false);
    }, 200);
  };

  const className = [
    "EmojiItem copy-to-clipboard",
    active ? 'active' : ''
  ];

  return (
    <div
      className={className.join(' ').trim()}
      data-clipboard-text={symbol}
      onClick={handleClick}
    >
      <div className="EmojiItem__left">
        <span className="symbol">{ symbol }</span>
        <span className="title">{ title }</span>
      </div>
      <span className="EmojiItem__right">Click to copy emoji</span>
    </div>
  );
}
