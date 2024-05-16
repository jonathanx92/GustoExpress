import React, { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from 'prop-types';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const cartReducer = (state, action) => {
    let newItem, existingItem;
    switch(action.type){
        case 'SET_CART':
            return action.payload;
        case 'ADD_TO_CART':
            newItem = action.payload;
            existingItem = state.find(item => item.id === newItem.id);
            if(existingItem){
                return state.map(item => item.id === existingItem.id ? {
                    ...item,
                    quantity: item.quantity + newItem.quantity,
                } : item);
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
                item.id === action.payload.id ? {...item, quantity: item.quantity - 1} : item
            );
        case 'CLEAR_CART':
            return ([]);
        default:
            return state;
    }
};

export const CartProvider = ({children}) =>{
    const [cart, dispatch] = useReducer(cartReducer, [], () => {
        const localCart = localStorage.getItem('cart');
        return localCart ? JSON.parse(localCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return(
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};
