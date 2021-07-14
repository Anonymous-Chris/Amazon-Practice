export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action); //has item object
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] }; //return old data sets and new data sets
    // break;
    case "REMOVE_FROM_BASKET":
      return { state };
    // break;
    default:
      return state;
  }
};

export default reducer;
