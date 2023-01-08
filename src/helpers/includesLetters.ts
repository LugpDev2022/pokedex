export const includesLetters = (text: string): boolean => {
  const letters = "abcdefghyjklmnñopqrstuvwxyz";
  const lowerCaseText = text.toLowerCase();

  for (let i = 0; i < lowerCaseText.length; i++) {
    if (letters.indexOf(lowerCaseText.charAt(i), 0) != -1) {
      return true;
    }
  }

  return false;
};
