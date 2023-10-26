import "./takeout.css";
import "bootstrap/dist/css/bootstrap.css";
import ourStory from "../Our Story.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import { RiMoneyEuroCircleLine } from "react-icons/ri";
function Takeout() {

  const [first,setFirst] = useState(false)
  const [firstA,setFirstA] = useState(false)
  const [firstB,setFirstB] = useState(false)
  const [firstC,setFirstC] = useState(false)
  const [firstD,setFirstD] = useState(false)
  const [firstE,setFirstE] = useState(false)

    return (
        <div className="container-fluid">
     
        <h1 className="bold">TAKEOUT</h1>
        <h6 className="orange">Time:12p.m - 4p.m</h6>
        <h6 className="light">From 12 p.m. - 4 P.m. takeaway, pick up or Dine in only , Delivery Start from 4 p.m.</h6>
        <div>
        <button className="takeOut-btn active" >STARTERS</button>
        <button className="takeOut-btn" >SOUP & SALAD</button>
        <button className="takeOut-btn" >STIR FRIES</button>
        <button className="takeOut-btn" >CURRIES</button>
        <button className="takeOut-btn" >NOODLES</button>
        <button className="takeOut-btn" >FRIED RICE</button>
        <button className="takeOut-btn" >VEGAN</button>
        <button className="takeOut-btn" > KIDS MENU</button>
        <button className="takeOut-btn" >SEAFOOD</button>
        <button className="takeOut-btn" >SIDES & NIBBLES</button>
        <button className="takeOut-btn" >BEVERAGES</button>
        </div>

      
        
        <div className="container-fluid mt-5">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3 ">
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
                    <div className="d-flex justify-content-between parent">
                    <div className="d-flex align-items-center "> 
                          <RiMoneyEuroCircleLine className="money-color"/>
                            <h6 className="money-color">8.66</h6>
                      </div> 
                      <p className="d-flex" onClick={()=> setFirst((prev) => !prev)} style={{cursor:"pointer"}}>
                        {/* <img src={icon} alt="..."  className="icon"/> */}
                        View Allergens
                      </p>
                     { first && <div className="min-box">
                     <div className="box1"> <img src={ourStory}/>  </div>
                     <div className="box1"> <img src={ourStory}/>  </div>
                     <div className="box1"> <img src={ourStory}/>  </div>
                      </div>}  
                                </div>
                    <a href="#" class="btn btn-primary order-button">
                      ORDER NOW
                    </a>
                  </div>
                </div>
              </div>
              

              <div className="col-lg-3 " >
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

                    <div className="d-flex justify-content-between parent">
                    <div className="d-flex align-items-center"> 
                          <RiMoneyEuroCircleLine  className="money-color"/>
                            <h6  className="money-color">8.66</h6>
                      </div> 
                      <p className="d-flex" onClick={()=> setFirstA((prev) => !prev)} style={{cursor:"pointer"}}>
                        {/* <img src={icon} alt="..."  className="icon"/> */}
                        View Allergens
                      </p>
                     { firstA && <div className="min-box">
                     <div className="box1"> <img src={ourStory}/>  </div>
                     <div className="box1"> <img src={ourStory}/>  </div>
                     <div className="box1"> <img src={ourStory}/>  </div>
                      </div>}  
                                </div>
                    <a href="#" class="btn btn-primary order-button">
                      ORDER NOW
                    </a>
                  </div>
                </div>
              </div>
          
              <div className="col-lg-3 " >
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
                    <div className="d-flex justify-content-between parent">
                    <div className="d-flex align-items-center"> 
                          <RiMoneyEuroCircleLine  className="money-color"/>
                            <h6  className="money-color">8.66</h6>
                      </div> 
                      <p className="d-flex" onClick={()=> setFirstB((prev) => !prev)} style={{cursor:"pointer"}}>
                        {/* <img src={icon} alt="..."  className="icon"/> */}
                        View Allergens
                      </p>
                     { firstB && <div className="min-box">
                     <div className="box1"> <img src={ourStory}/>  </div>
                     <div className="box1"> <img src={ourStory}/>  </div>
                     <div className="box1"> <img src={ourStory}/>  </div>
                      </div>}  
                                </div>
                    <a href="#" class="btn btn-primary order-button">
                      ORDER NOW
                    </a>
                  </div>
                </div>
              </div>
</div>
</div>
<div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3 mt-5 ">
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
                    <div className="d-flex justify-content-between parent">
                     <div className="d-flex"> 
                          <RiMoneyEuroCircleLine  className="money-color"/>
                            <h6  className="money-color">8.66</h6>
                      </div> 
                      <p className="d-flex" onClick={()=> setFirstC((prev) => !prev)} style={{cursor:"pointer"}}>
                        {/* <img src={icon} alt="..."  className="icon"/> */}
                        View Allergens
                      </p>
                     { firstC && <div className="min-box">
                     <div className="box1"> <img src={ourStory}/>  </div>
                     <div className="box1"> <img src={ourStory}/>  </div>
                     <div className="box1"> <img src={ourStory}/>  </div>
                      </div>}  
                                </div>
                    <a href="#" class="btn btn-primary order-button">
                  
                      <Link to='/orderNow' >     ORDER NOW </Link>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 mt-5" >
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
                    <div className="d-flex justify-content-between parent">
                    <div className="d-flex align-items-center"> 
                          <RiMoneyEuroCircleLine  className="money-color"/>
                            <h6  className="money-color">8.66</h6>
                      </div>    
                      <p className="d-flex" onClick={()=> setFirstD((prev) => !prev)} style={{cursor:"pointer"}}>
                        {/* <img src={icon} alt="..."  className="icon"/> */}
                        View Allergens
                      </p>
                     { firstD && <div className="min-box">
                        <div className="box1"> <img src={ourStory}/>  </div>
                        <div className="box1"> <img src={ourStory}/> </div>
                        <div className="box1">  <img src={ourStory}/>  </div>
                        </div>}  
                                </div>
                    <a href="#" class="btn btn-primary order-button">
                    <Link to='/orderNow' >     ORDER NOW </Link>
                    </a>
                  </div>
                </div>
              </div>
            
              <div className="col-lg-3 mt-5 " >
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
                    <div className="d-flex justify-content-between parent">
                    <div className="d-flex align-items-center"> 
                          <RiMoneyEuroCircleLine  className="money-color"/>
                            <h6  className="money-color">8.66</h6>
                      </div> 
                      <p className="d-flex" onClick={()=> setFirstE((prev) => !prev)} style={{cursor:"pointer"}}>
                        {/* <img src={icon} alt="..."  className="icon"/> */}
                        View Allergens
                      </p>
                     { firstE && <div className="min-box">
                     <div className="box1"> <img src={ourStory}/>  </div>
                     <div className="box1"> <img src={ourStory}/>  </div>
                     <div className="box1"> <img src={ourStory}/>  </div>
                      </div>}  
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
        <div className="d-flex justify-content-center ">
        <nav aria-label="...">
  <ul class="pagination">
   
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item " aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
   
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</div>
      </div>
      
    );
  }
  
  export default Takeout;
  