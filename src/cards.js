import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Cards(props) {
  return (
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.title}</h5>
            <h6 className="card-price text-center">{props.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.details[0].class}>{props.details[0].list}</li>
              <li className={props.details[1].class}>{props.details[1].list}</li>
              <li className={props.details[2].class}>{props.details[2].list}</li>
              <li className={props.details[3].class}>{props.details[3].list}</li>
              <li className={props.details[4].class}>{props.details[4].list}</li>
              <li className={props.details[5].class}>{props.details[5].list}</li>
              <li className={props.details[6].class}>{props.details[6].list}</li>
              <li className={props.details[7].class}>{props.details[7].list}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      
  )
}

export default Cards;