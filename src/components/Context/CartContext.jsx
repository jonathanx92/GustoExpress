import React, {createContext, useContext, useReducer} from "react";
import PropTypes from 'prop-types';
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const cartReducer = (state, action) => {
    let newItem, existingItem;
    switch(action.type){
        case 'ADD_TO_CART':
            newItem = action.payload;
            existingItem = state.find(item => item.id === newItem.id);

            if(existingItem){
                return state.map(item => item.id === existingItem ? {
                    ...item,
                    quantity: item.quantity + newItem.quantity,
                } : item
                );
            } else {
                return [...state, {...newItem}];
            }
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload);
        case 'INCREMENT_QUANTITY':
            return state.map(item =>
            item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item 
            );
        case 'DECREMENT_QUANTITY':
            return state.map(item =>
                item.id === action.payload.id ? {...item, quantity: item.quantity -1} : item
            );
        default:
            return state;
    }
};

export const CartProvider = ({children}) =>{
    const [cart, dispatch] = useReducer(cartReducer, []);

    return(
        <CartContext.Provider value={{cart,dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};