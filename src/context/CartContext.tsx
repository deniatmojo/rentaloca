"use client";
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { Dayjs } from "dayjs";

// Interface untuk Item dan State
interface CartItem {
  id: string;
  name: string;
  size: string;
  retail_price: number;
  rental: number;
  quantity: number;
  image: string;
  maxquantity: number
}

interface CartState {
  id_session: string;
  items: CartItem[];
  isCartOpen: boolean;
  isRentOpen: boolean;
  startDate: null | Dayjs;
  endDate: null | Dayjs;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: string; size: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; size: string; quantity: number } }
  | { type: "TOGGLE_CART" }
  | { type: "TOGGLE_RENT" }
  | { type: "SET_START_DATE"; payload: Dayjs | null }
  | { type: "SET_END_DATE"; payload: Dayjs | null }
  | { type: "RESET_STATE"; payload: CartState };

// Reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id && item.size === action.payload.size
      );
      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity = Math.min(action.payload.maxquantity, updatedItems[existingItemIndex].quantity + action.payload.quantity);
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

    case "TOGGLE_RENT":
      return { ...state, isRentOpen: !state.isRentOpen };

    case "SET_START_DATE":
      return { ...state, startDate: action.payload };

    case "SET_END_DATE":
      return { ...state, endDate: action.payload };

    case "RESET_STATE":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

// Generate unique session ID
const generateUniqueId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

// Initial state
const initialCartState: CartState = {
  id_session: generateUniqueId(),
  items: [],
  isCartOpen: false,
  isRentOpen: false,
  startDate: null,
  endDate: null,
};

// Context
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialCartState,
  dispatch: () => null,
});

// CartProvider
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  // Muat state dari localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cartState");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      dispatch({ type: "RESET_STATE", payload: parsedCart });
    }
  }, []);

  // Simpan state ke localStorage setiap kali state berubah
  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook untuk menggunakan CartContext
export const useCart = () => useContext(CartContext);

// Fungsi untuk memperbarui tanggal mulai dan selesai
export const setStartDate = (dispatch: React.Dispatch<CartAction>, date: Dayjs) => {
  dispatch({ type: "SET_START_DATE", payload: date });
};

export const setEndDate = (dispatch: React.Dispatch<CartAction>, date: Dayjs) => {
  dispatch({ type: "SET_END_DATE", payload: date });
};
