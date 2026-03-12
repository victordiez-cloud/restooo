import { useState } from "react";
import { useCart } from "../hooks/useCart.jsx";
import CartModal from "./CartModal.jsx";

function Cart() {
  const { state } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-light btn-sm position-relative"
        aria-label="Panier"
        onClick={() => setIsOpen(true)}
      >
        🛒
        {state.totalItems > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {state.totalItems}
          </span>
        )}
      </button>
      <CartModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default Cart;
