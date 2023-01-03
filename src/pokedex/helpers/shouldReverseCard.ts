const allowedIndices = [0, 1, 5, 4];

export const shouldReverseCard = (cardIndex: number): boolean =>
  allowedIndices.includes(cardIndex) ? true : false;
