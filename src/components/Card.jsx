import plates from "../data/plates.json";
import Button from "./Button";

function Card() {
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
                    className="badge text-bg-light border text-secondary fw-normal"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button label="Ajouter au panier" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Card;
