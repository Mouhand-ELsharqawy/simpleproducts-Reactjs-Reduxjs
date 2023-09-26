import "./header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
    return ( 
    <div className="nav-container">
        <div className="container0">
            <div id="i" className="inav">
                <div className="c1"></div>
                <div className="c2"></div>
                <div className="c3"></div>
            </div>
        </div>
    
        <ul id="nav" className="nav">
            <NavLink to="/">Products</NavLink>
           <NavLink to="/addproduct">Add Products</NavLink>
        </ul>
    </div>  
     );
}
 
export default Header;