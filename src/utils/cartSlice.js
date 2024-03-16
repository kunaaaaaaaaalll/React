import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    // cart slice name 'CART'
    'name': 'CART',

    'initialState': {
        'items': []
    },

    'reducers': {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },

        removeItem: (state, action) => {
            state.items.pop(action.payload);
        },

        clearCart: (state) => {
            state.items.length = 0; // []
            // Q why we didn't do state = [] ?
        }
    }

});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;