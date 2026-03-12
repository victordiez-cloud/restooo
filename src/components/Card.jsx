import Button from "./Button";
import { useFilters } from "../hooks/useFilters.jsx";
import { useCart } from "../hooks/useCart.jsx";

function Card({ plates }) {
  const { selectedTag, setSelectedTag } = useFilters();
  const { state, addItem, removeItem } = useCart();

  function handleTagClick(tag) {
    setSelectedTag(selectedTag === tag ? null : tag);
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
      {plates.map((plate) => (
        <article key={plate.id} className="col">
          <div className="card h-100 shadow-sm">
            <img src={plate.image} alt={plate.name} className="card-img-top" />

            <div className="card-body d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start gap-2 border-bottom pb-2">
                <h4 className="h5 mb-0">{plate.name}</h4>
                <span className="fs-5">{Math.round(plate.price)} €</span>
              </div>

              <div className="d-flex flex-wrap gap-2 my-3">
                {plate.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    role="button"
                    className={`badge border fw-normal ${selectedTag === tag ? "text-bg-secondary" : "text-bg-light text-secondary"}`}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="d-flex gap-2">
                <Button
                  label="Ajouter au panier"
                  onClick={() => addItem(plate)}
                />
                {state.items.some((item) => item.id === plate.id) && (
                  <Button
                    label="Retirer"
                    variant="btn-outline-danger"
                    onClick={() => removeItem(plate.id)}
                  />
                )}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Card;
