import Cart from "./Cart";

function Header() {
  return (
    <header className="hero-header position-relative d-flex align-items-center justify-content-center text-white">
      <div className="position-absolute top-0 end-0 m-3">
        <Cart />
      </div>
      <h1
        className="display-2 fw-bold mb-0"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Mon Restaurant
      </h1>
    </header>
  );
}

export default Header;
