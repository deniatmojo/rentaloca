"use client";
import React, { createContext, useContext, useReducer } from "react";
import { Dayjs } from "dayjs";

interface CartItem {
  id: string;
  name: string;
  size: string;
  retail_price: number;
  rental: number;
  quantity: number;
  image: string;
}

interface CartState {
  id_session: string;
  items: CartItem[];
  isCartOpen: boolean;
  startDate: Date | null | Dayjs;
  endDate: Date | null | Dayjs; 
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: string; size: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; size: string; quantity: number } }
  | { type: "TOGGLE_CART" }
  | { type: "SET_START_DATE"; payload: Date | Dayjs | null  }
  | { type: "SET_END_DATE"; payload: Date | Dayjs | null  };  

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id && item.size === action.payload.size
      );
      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: updatedItems };
      }
      return { ...state, items: [...state.items, action.payload] };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.size === action.payload.size)
        ),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.size === action.payload.size
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "TOGGLE_CART":
      return { ...state, isCartOpen: !state.isCartOpen };

    case "SET_START_DATE":
      return { ...state, startDate: action.payload };

    case "SET_END_DATE":
      return { ...state, endDate: action.payload };

    default:
      return state;
  }
};

const generateUniqueId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

const initialCartState: CartState = {
  id_session: generateUniqueId(),
  items: [],
  isCartOpen: false,
  startDate: null, 
  endDate: null, 
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialCartState,
  dispatch: () => null,
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

// Fungsi untuk memperbarui tanggal mulai dan selesai
export const setStartDate = (dispatch: React.Dispatch<CartAction>, date: Date) => {
  dispatch({ type: "SET_START_DATE", payload: date });
};

export const setEndDate = (dispatch: React.Dispatch<CartAction>, date: Date) => {
  dispatch({ type: "SET_END_DATE", payload: date });
};
