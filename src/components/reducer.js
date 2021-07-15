export const initialState = {
  basket: [
    {
      id: 2,
      price: 12,
      rating: 4,
      image:
        "https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651",
      title: "Trending products",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action); //has item object
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] }; //return old data sets and new data sets
    // break;
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      console.log(action.id);
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("no product id");
      }
      return { ...state, basket: newBasket };
    // break;
    default:
      return state;
  }
};

export default reducer;
