import plates from "../data/plates.json";
import SearchInput from "./SearchInput";

function SideBar() {
  const formatLabel = (value) =>
    value ? value.charAt(0).toUpperCase() + value.slice(1) : "";

  const categories = [
    ...new Set(plates.map((plate) => plate.tags?.[0]).filter(Boolean)),
  ];

  const tags = [...new Set(plates.flatMap((plate) => plate.tags || []))];

  return (
    <div className="d-flex flex-column gap-3">
      <section className="card shadow-sm">
        <h3 className="card-header bg-dark text-white fs-6 py-2">Catégorie</h3>
        <ul className="list-group list-group-flush">
          {categories.map((category) => (
            <li key={category} className="list-group-item py-2 small">
              {formatLabel(category)}
            </li>
          ))}
        </ul>
      </section>

      <SearchInput icon="€" placeholder="Filtrer par prix" type="number" />
      <SearchInput icon="🔎" placeholder="Rechercher un plat" />

      <section className="card shadow-sm">
        <div className="card-body d-flex flex-wrap gap-2 p-2">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className="btn btn-outline-secondary btn-sm"
            >
              {formatLabel(tag)}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SideBar;
