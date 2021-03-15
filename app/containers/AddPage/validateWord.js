export const validateWord = word => {
  if (word.length > 20) {
    return 'word must be shorter than 20 characters';
  }
  if (!/^[a-zA-Z]+$/.test(word)) {
    return 'word must only contain letters';
  }
  return false;
};
