export const loadCartFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem('cart');

    if (cart === null) {
      return [];
    }

    return JSON.parse(cart);
  } catch (error) {
    console.error('Could not load cart from localStorage', error);
    return [];
  }
};

export const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Could not save cart to localStorage', error);
  }
};
