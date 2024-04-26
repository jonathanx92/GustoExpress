import React, {createContext, useContext, useReducer} from "react";
import PropTypes from 'prop-types';
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload.id);
        case 'INCREMENT_QUANTITY':
            return state.map(item =>
            item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item 
            );
        case 'DECREMENT_QUANTITY':
            return state.map(item =>
                item.id === action.payload.id ? {...item, quantity: item.quantity -1} : item
            );
        case 'CLEAR_CART':
            return [];
        
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