import emojiList from '../emojiList.json';

export const filterEmoji = (q, limit) => {
  return emojiList
    .filter(emoji => {
      // Search by title
      if (emoji.title.toLowerCase().includes(q.toLowerCase())) {
        return true;
      }

      // Search by list keywords.
      if (emoji.keywords.includes(q)) {
        return true;
      }

      return false;
    })
    .slice(0, limit);
};
