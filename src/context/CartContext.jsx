import { useReducer } from "react";
import { CartContext } from "./cartContextValue.jsx";

const initialState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

function recalcTotals(items) {
  return {
    totalPrice: items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    ),
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
  };
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const plate = action.payload;
      const existing = state.items.find((item) => item.id === plate.id);

      let newItems;
      if (existing) {
        newItems = state.items.map((item) =>
          item.id === plate.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        newItems = [
          ...state.items,
          { id: plate.id, name: plate.name, price: plate.price, quantity: 1 },
        ];
      }

      return { items: newItems, ...recalcTotals(newItems) };
    }

    case "REMOVE_ITEM": {
      const plateId = action.payload;
      const existing = state.items.find((item) => item.id === plateId);

      if (!existing) {
        return state;
      }

      let newItems;
      if (existing.quantity === 1) {
        newItems = state.items.filter((item) => item.id !== plateId);
      } else {
        newItems = state.items.map((item) =>
          item.id === plateId ? { ...item, quantity: item.quantity - 1 } : item,
        );
      }

      return { items: newItems, ...recalcTotals(newItems) };
    }

    case "CLEAR_CART": {
      return initialState;
    }

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function addItem(plate) {
    dispatch({ type: "ADD_ITEM", payload: plate });
  }

  function removeItem(plateId) {
    dispatch({ type: "REMOVE_ITEM", payload: plateId });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  const value = { state, addItem, removeItem, clearCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
