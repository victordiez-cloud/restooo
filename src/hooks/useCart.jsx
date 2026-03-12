import { useContext } from "react";
import { CartContext } from "../context/cartContextValue.jsx";

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart doit être utilisé dans un CartProvider");
  }
  return context;
}
