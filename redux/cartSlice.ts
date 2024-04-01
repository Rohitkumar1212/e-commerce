import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./index";

interface CartState{
    cart: any,
}

const initialState:CartState ={
    cart: []
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        //multiple actions
        addToCart: (state, action)=>{
            const isPresent  = state.cart.find((item:any)=>{
                return item.id === action.payload.id
            })
            if(isPresent){
                //update quantity only
                state.cart = state.cart.map((item:any)=>{
                    return item.id === action.payload.id ?({...item, quantity: item.quantity+1}):item;
                })
            }else{
                //add the item in the array
                state.cart.push({...action.payload, quantity: 1})
            }
            
        },
        removeFromTheCart:(state, action)=>{
            state.cart = state.cart.filter((item:any )=>item.id !== action.payload)
        },
        increamentQuantity:(state, action)=>{
            state.cart = state.cart.map((item:any)=>{
                return item.id === action.payload.id ?({...item, quantity: item.quantity+1}):item;
            })
        },
        decreamentQuantity:(state, action)=>{
            state.cart = state.cart.map((item:any)=>{
                return item.id === action.payload.id ?({...item, quantity: item.quantity-1}):item;
                //handling non negative item value
                // if (item.id === action.payload.id) {
                //     const newQuantity = Math.max(item.quantity - 1, 0); // Ensures quantity won't be negative
                //     return { ...item, quantity: newQuantity };
                // } else {
                //     return item;
                // }
            })
        }
    }
})
export const { addToCart, removeFromTheCart, increamentQuantity, decreamentQuantity } = cartSlice.actions;

export const getCart = (state: RootState)=>state.cart.cart
export default cartSlice.reducer