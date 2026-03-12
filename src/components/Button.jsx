function Button({ label, onClick, variant = "btn-outline-primary" }) {
  return (
    <button
      type="button"
      className={`btn btn-sm w-100 mt-auto ${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
