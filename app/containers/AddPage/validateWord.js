export const validateWord = (word, wordArray) => {
  if (wordArray.includes(word)) {
    return 'that word is already in the list';
  }
  if (word.length > 20) {
    return 'word must be shorter than 20 characters';
  }
  if (!/^[a-zA-Z]+$/.test(word)) {
    return 'word must only contain letters';
  }
  return false;
};
