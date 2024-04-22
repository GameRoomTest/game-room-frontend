export const getRandomNumber = (max: number, except?: number): number => {
  let randomNumber = Math.floor(Math.random() * max);

  while (randomNumber === except) {
    randomNumber = Math.floor(Math.random() * max);
  }

  return randomNumber;
};
