function SearchInput({ icon, placeholder, type = "text", value, onChange }) {
  return (
    <section className="card shadow-sm">
      <div className="card-body p-2">
        <div className="input-group input-group-sm">
          <span className="input-group-text">{icon}</span>
          <input
            type={type}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </section>
  );
}

export default SearchInput;
