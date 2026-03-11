function SearchInput({ icon, placeholder, type = "text" }) {
  return (
    <section className="card shadow-sm">
      <div className="card-body p-2">
        <div className="input-group input-group-sm">
          <span className="input-group-text">{icon}</span>
          <input
            type={type}
            className="form-control"
            placeholder={placeholder}
          />
        </div>
      </div>
    </section>
  );
}

export default SearchInput;
