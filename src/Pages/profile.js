import { Link } from "react-router-dom";
import "./profile.css";
import "bootstrap/dist/css/bootstrap.css";
import ourStory from "../Our Story.png";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { useState } from "react";

function Profile() {

  const [count,setCount] = useState(0)
  const handleClick = () =>{
    setCount( count + 1)
  }
  const handleZero = ()=>{
    setCount(0)
  }


  const [countA,setCountA] = useState(0)
  const handleClickA = () =>{
    setCountA( countA + 1)
  }

  const handleZeroA = ()=>{
    setCountA(0)
  }

  const [countB,setCountB] = useState(0)
  const handleClickB = () =>{
    setCountB( countB + 1)
  }

  const handleZeroB = ()=>{
    setCountB(0)
  }

  const [countC,setCountC] = useState(0)
  const handleClickC = () =>{
    setCountC( countC + 1)
  }

  const handleZeroC = ()=>{
    setCountC(0)
  }

  const [countD,setCountD] = useState(0)
  const handleClickD = () =>{
    setCountD( countD + 1)
  }

  const handleZeroD = ()=>{
    setCountD(0)
  }
  const [countE,setCountE] = useState(0)
  const handleClickE = () =>{
    setCountE( countE + 1)
  }

  const handleZeroE = ()=>{
    setCountE(0)
  }


  const [countF,setCountF] = useState(0)
  const handleClickF = () =>{
    setCountF( countF + 1)
  }

  const handleZeroF = ()=>{
    setCountF(0)
  }
  const [countX,setCountX] = useState(0)
  const handleClickX = () =>{
    setCountX( countX + 1)
  }

  const handleZeroX = ()=>{
    setCountX(0)
  }
  const [countZ,setCountZ] = useState(0)
  const handleClickZ = () =>{
    setCountZ( countZ + 1)
  }

  const handleZeroZ = ()=>{
    setCountZ(0)
  }

  return (
    <>
      <div className="nav-color">
        <Link to="/" className="px-4 text-white text-decoration-none">
            <h6>back to menu</h6>
        </Link>
      </div>
      <div className="main">
        <div className="col-lg-12 bac-bar">
          <div className="row">
            <div className="col-lg-4 bg-white">
              <p className="px-3">Chilli & Cashew (L)</p>
             <p className="px-3">Best Seller. Cashews, scallions, broccoli, peppers, and onions
              with your protein selection in a homemade Thai seasoning sauce</p> 
              <div className="px-3">
                <button className="allergen-btn">View Allergens</button>
              </div>
              <div className=" bac-bar header mt-2">
                <p className="pt-2">CHOOSE A PROTEIN</p>
                <button className="btn  profilebtn ">Choose 1</button>
              </div>
              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Tofu</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="profile-input" />
                </div>
              </div>

              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Chicken</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="profile-input" />
                </div>
              </div>

              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Irish Beef</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="profile-input" />
                </div>
              </div>

              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Prawns</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="profile-input" />
                </div>
              </div>

              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Duck</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="profile-input" />
                </div>
              </div>
               
              <div className=" bac-bar header mt-2">
                <p className="pt-2">ADD SOME EXTRA WITH MEAL</p>
                <button className="btn  profilebtn ">Choose 2</button>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Tofu</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div className="icon-border">
                <AiOutlineDelete className="icon-color" onClick={handleZero}/>
                    <span>{count}</span>
                    <BsPlus className="icon-color" onClick={handleClick}/>
                </div>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Chicken</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div className="icon-border">
                <AiOutlineDelete className="icon-color" onClick={handleZeroA}/>
                    <span>{countA} </span>
                    <BsPlus className="icon-color" onClick={handleClickA}/>
                </div>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Irish Beef</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div className="icon-border">
                <AiOutlineDelete className="icon-color" onClick={handleZeroB}/>
                    <span>{countB}</span>
                    <BsPlus className="icon-color" onClick={handleClickB}/>
                </div>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Prawns</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div className="icon-border">
                <AiOutlineDelete className="icon-color" onClick={handleZeroC}/>
                    <span>{countC}</span>
                    <BsPlus className="icon-color" onClick={handleClickC}/>
                </div>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Duck</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div className="icon-border">
                <AiOutlineDelete className="icon-color" onClick={handleZeroD}/>
                    <span>{countD}</span>
                    <BsPlus className="icon-color" onClick={handleClickD}/>
                </div>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Cashew Nuts</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div className="icon-border">
                <AiOutlineDelete className="icon-color" onClick={handleZeroE}/>
                    <span>{countE}</span>
                    <BsPlus className="icon-color" onClick={handleClickE}/>
                </div>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Mix Pepper</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div className="icon-border">
                <AiOutlineDelete className="icon-color" onClick={handleZeroF}/>
                    <span>{countF}</span>
                    <BsPlus className="icon-color" onClick={handleClickF}/>
                </div>
              </div>
              
              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Broccoli</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div className="icon-border">
                <AiOutlineDelete className="icon-color" onClick={handleZeroZ}/>
                    <span>{countZ}</span>
                    <BsPlus className="icon-color" onClick={handleClickZ}/>
                </div>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Asian Green</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div className="icon-border">
                <AiOutlineDelete className="icon-color" onClick={handleZeroX}/>
                    <span>{countX}</span>
                    <BsPlus className="icon-color" onClick={handleClickX}/>
                </div>
              </div>

              <div className=" bac-bar header mt-2">
                <p className="pt-2">CHOOSE A SIDE</p>
                <button className="btn  profilebtn ">Choose 1</button>
              </div>
              
              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>No Rice</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="profile-input" />
                </div>
              </div>
              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Jasmine Rice</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="profile-input" />
                </div>
              </div>
              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Brown Rice</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="profile-input" />
                </div>
              </div>
              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="profile-image1">
                    <img src={ourStory} alt="profile image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Egg Fried Rice</span>
                    <span>(Free)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="profile-input" />
                </div>
              </div>
              <div>
                <div className="footer mx-4 mt-4">
                  <span className="span">Cooking Instructions</span>
                  <p className="footer-conten">Please note, Modifications to your order: spicy, no onion,
more cheese, etc.</p>
                </div>
            </div>
            </div>

            
            <div className="col-lg-8 profile-footer">
              <img src={ourStory} className="mt-5" alt="profile image" />

          
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
