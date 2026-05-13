export const getPrice = (defaultPrice, size) => {
  switch (size) {
    case 'standart':
      return defaultPrice;
    case 'mini':
      return Math.round(defaultPrice * 0.8);
    case 'max':
      return Math.round(defaultPrice * 1.2);
  }
};
