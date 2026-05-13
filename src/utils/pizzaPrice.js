export const getPrice = (defaultPrice, size, toppings = []) => {
  //берем  массив топпингов
  console.log(toppings);
  let price = defaultPrice;
  switch (size) {
    case 'mini':
      price = Math.round(defaultPrice * 0.8);
      break;
    case 'max':
      price = Math.round(defaultPrice * 1.2);
      break;
  }
  let toppingsPrice = toppings.reduce((sum, item) => sum + item.price, 0);
  return price + toppingsPrice;
};
