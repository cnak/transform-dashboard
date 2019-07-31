const pad = number => {
  return number < 10 ? `0${number}` : number;
};

export const currentTime = currentDate => {
  return `${currentDate.getHours()}:${pad(currentDate.getMinutes())}`;
};
