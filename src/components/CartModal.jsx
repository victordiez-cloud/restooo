import { useCart } from "../hooks/useCart.jsx";

function CartModal({ isOpen, onClose }) {
  const { state, addItem, removeItem, clearCart } = useCart();

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        onClick={onClose}
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">🛒 Mon Panier</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Fermer"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">
              {state.items.length === 0 ? (
                <p className="text-muted text-center my-4">
                  Votre panier est vide.
                </p>
              ) : (
                <ul className="list-group list-group-flush">
                  {state.items.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <span className="fw-semibold">{item.name}</span>
                        <br />
                        <small className="text-muted">
                          {item.price.toFixed(2)} € × {item.quantity} ={" "}
                          {(item.price * item.quantity).toFixed(2)} €
                        </small>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeItem(item.id)}
                        >
                          −
                        </button>
                        <span className="fw-bold">{item.quantity}</span>
                        <button
                          className="btn btn-outline-success btn-sm"
                          onClick={() => addItem(item)}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="modal-footer d-flex justify-content-between">
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={clearCart}
                disabled={state.items.length === 0}
              >
                Vider le panier
              </button>
              <span className="fw-bold fs-5">
                Total : {state.totalPrice.toFixed(2)} €
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartModal;
