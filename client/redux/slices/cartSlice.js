import { createSlice,createSelector } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    addToCart: (state, action) => {
      state.items=[...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
        let newCart =[...state.items];
        let itemIndex = state.items.findIndex(item=>item._id==action.payload.id);
        // console.log(itemIndex);
        
        if(itemIndex>=0){
          newCart.splice(itemIndex, 1);
        }else{
          console.warn("con't remove the item that is not added to cart!");
        }
      state.items=newCart;
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart,emptyCart } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items;

// Memoized selector for items by ID
export const selectCartItemsById = createSelector(
  [selectCartItems, (_, id) => id],
  (items, id) => items.filter((item) => item._id === id)
)

// Memoized selector for total price
export const selectCartTotal = createSelector(
  [selectCartItems],
  (items) => items.reduce((total, item) => total + item.price, 0)
)

export default cartSlice.reducer;