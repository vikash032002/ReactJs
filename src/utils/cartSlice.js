import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },

    reducers:{
        addItems:(state,action)=>{
            // mutating the state here
            state.items.push(action.payload);
        },

        removeItem:(state)=>{
            state.items.pop();
        },

        clearCart:(state)=>{
            state.items=[];
        }
    }

});

export const{addItems,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;