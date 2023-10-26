import "./lunch.css";
import "bootstrap/dist/css/bootstrap.css";
import ourStory from "../Our Story.png";
// import icon from '../Allergens.svg';
function Lunch() {
  return (
    <>
      <div className="container-fluid">
        <h1 className="bold">LUNCH BOX</h1>
        <h6 className="orange">Time:12p.m - 4p.m</h6>
        <h6 className="light">For takeaway, Pickup or Dine in only.</h6>
        <div>
          <button className="takeOut-btn active" >STIR FRIES</button>
          <button className="takeOut-btn " >CURRIES</button>
          <button className="takeOut-btn " >NOODLE</button>
          <button className="takeOut-btn " >FRIED RICE</button>
        </div>

        <div className="container-fluid mt-5">
          <div className="col-lg-12">
            <div className="row">
              <div className=" col-lg-3 col-mx-5">
                <div class="card ">
                  <img
                    src={ourStory}
                    class="card-img-top food-color"
                    alt="..."/>
            
                  <div class="card-body">
                    <h5 class="card-title">Crispy Chicken (L)</h5>
                    <h6 class="card-text">
                      Most popular. Lightly battered pieces of chicken stir
                      fried with vegetables in our zesty sweet chilli sauce.
                    </h6>
                    <div className="d-flex justify-content-between">
                      <h6>8.66</h6>
                      <a href="#" className="d-flex">
                        {/* <img src={icon} alt="..."  className="icon"/> */}
                        View Allergens
                      </a>
                    </div>
                    <a href="#" class="btn btn-primary order-button">
                      ORDER NOW
                    </a>
                  </div>
                </div>
              </div>
             
              <div className="col-lg-3 .col-lg-mx-5" >
                <div class="card ">
                  <img
                    src={ourStory}
                    class="card-img-top food-color"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Chilli & Cashew</h5>
                    <h6 class="card-text">
                      Best Seller. Cashews,your protein selection with
                      vegetables in our zesty sweet chilli sauce.Lightly
                      battered pieces of chicken
                    </h6>
                    <div className="d-flex justify-content-between">
                      <h6>8.66</h6>
                      <a href="#" className="d-flex">
                        {/* <img src={icon} alt="..."  className="icon"/> */}
                        View Allergens
                      </a>
                    </div>
                    <a href="#" class="btn btn-primary order-button">
                      ORDER NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lunch;
