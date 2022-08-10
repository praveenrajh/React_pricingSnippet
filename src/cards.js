import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function Cards({ item }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {item.title}
          </h5>
          <h6 className="card-price text-center">
            {item.currency}
            {item.price}
            <span className="period">/{item.period}</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {item.details.map((terms) => {
              return (
                <li className={terms.isEnable ? `` : `text-muted`}>
                  <span className="fa-li">
                    {terms.isEnable ? (
                      <FontAwesomeIcon icon={faCheck} />
                    ) : (
                      <FontAwesomeIcon icon={faTimes} />
                    )}
                  </span>
                  <span>
                    {terms.isBold ? <strong>{terms.list}</strong> : terms.list}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
