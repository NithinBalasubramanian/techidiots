import React , { useState , useEffect } from 'react';
import '../style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';



const Navbar = () => {

    let [ display_status , setDisplay_status ] = useState(false);
    
    const sidebarStatusHandler = () =>{
        setDisplay_status(!display_status);
    }
    
     useEffect(()=>{
        setDisplay_status(false);
    }, []) 
    
    return(
      <div className="NavbarMain">
        <div className="NavContainer row">
            <div className="col-md-4 navHead">
                <div className="navHeadLogo">
                    <h2>Tech Idiots</h2> 
                </div>
                <div className="navHeadMenu">
                    <BiMenuAltLeft onClick={ sidebarStatusHandler }  size="40px" color="#fff" style={{margin:"10px"}}/>
                </div>
            </div>
            <div className="col-md-8">
                <div className="NavList">
                    <ul className="NavListMenu">
                        <li><NavLink to="/" activeClassName="activeMenu" exact>HOME</NavLink></li>
                        <li><NavLink to="/News" activeClassName="activeMenu">NEWS</NavLink></li>
                        <li><NavLink to="/Books" activeClassName="activeMenu">BOOKS</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={ (display_status) ? 'mobileNav mobOn' : 'mobileNav'}>
            <div className="NavListMob">
                <ul className="NavListMenuMob">
                    <li><NavLink to="/" activeClassName="activeMenu" exact>HOME</NavLink></li>
                    <li><NavLink to="/News" activeClassName="activeMenu">NEWS</NavLink></li>
                    <li><NavLink to="/Books" activeClassName="activeMenu">BOOKS</NavLink></li>
                </ul>
            </div>
        </div>
      </div>
      )
}

export default Navbar;
