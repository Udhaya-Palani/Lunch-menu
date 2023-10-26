import { Link } from 'react-router-dom';
import './menu.css';
import "bootstrap/dist/css/bootstrap.css";

function Menu() {
    return (
       

        <>
        
      <div className="navbar">
          <div className="navbar-left">
                            <nav>

                            <Link to='/lunch'><p>LUNCH BOX</p></Link>
                            <Link to='/takeout'><p>TAKEOUT</p></Link>
                            <Link to='/takeout'> <p>MEAL DEALS</p></Link>
                            <Link to='/takeout'><p className='hidden'>SPECIAL&VALUE MEALS</p></Link>
                           
                            <div className="animation "></div>
                            </nav>
                   </div>
                   </div>
                   <div className="hrline "></div>
        </>
    );
}

export default Menu;
