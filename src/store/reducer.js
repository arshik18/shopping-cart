import * as actionTypes from "../store/action";

const initialState = {
  cartCounter: 0,
  cartItemList: [],
  totalPrice: 0,
  searchList:[]
};

const newTotalPrice = (cartItemList) => {
  let newTotalPrice = 0;
  for (let i = 0; i < cartItemList.length; i++) {
    newTotalPrice =
      newTotalPrice + cartItemList[i].price * cartItemList[i].quantity;
  }
  return newTotalPrice;
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART:
      //To check whether the item clicked already exist in cart or not
      let indexOfId = state.cartItemList.findIndex(
        (item) => item.id === action.product.id
      );
      //If item does not exist in the cart add it to the view cart list,increase cart counter and set the total price
      if (indexOfId === -1) {
        state.cartCounter = state.cartCounter + 1;
        state.cartItemList = [...state.cartItemList, action.product];
      }
      //If item already exist increase its quantity 
      else {
        let newCartItemList = [...state.cartItemList];
        newCartItemList[indexOfId] = {
          ...newCartItemList[indexOfId],
          quantity: newCartItemList[indexOfId].quantity + 1,
        };
        state.cartItemList = [...newCartItemList];
      }
      return {
        ...state,
        totalPrice: newTotalPrice(state.cartItemList),
      };
      break;

    case actionTypes.DELETE_ITEM_FROM_CART:
      {
        let indexOfId = state.cartItemList.findIndex((i) => i.id === action.id);
        let updatedCartItemList = [...state.cartItemList];
        updatedCartItemList.splice(indexOfId, 1);
        state.cartItemList = [...updatedCartItemList];
        return {
          ...state,
          cartCounter: state.cartCounter - 1,
          totalPrice: newTotalPrice(state.cartItemList),
        };
      }
      break;

    case actionTypes.ON_QUANTITY_CHANGE:
      {
        let indexOfId = state.cartItemList.findIndex((i) => i.id === action.id);
        let newCartItemList = [...state.cartItemList];
        newCartItemList[indexOfId] = {
          ...newCartItemList[indexOfId],
          quantity: action.quantity,
        };
        state.cartItemList = [...newCartItemList];
        return {
          ...state,
          totalPrice: newTotalPrice(state.cartItemList),
        };
      }
      break;

    case actionTypes.EMPTY_CART:
      return {
        ...state,
        cartItemList: [],
        cartCounter: 0,
        totalPrice: 0,
      };
      break;

    case actionTypes.SEARCH_LIST:
      console.log(action.searchValue,action.list);
      if(action.searchValue !== "")
      {
        
        state.searchList = action.list
      }
      else{
        state.searchList = []
      }
      return{
        ...state
        
      }

    default:
      return state;
  }
};
export default reducer;
