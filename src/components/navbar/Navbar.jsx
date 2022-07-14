import React, { useContext } from 'react';
import logo from '../../assets/logo Prisma.png';
import { DataContext } from '../../context/DataContext';
import './navbar.css';

const Navbar = () => {

  const {setUser, pathName, setPathName } = useContext(DataContext);

  const handleLogOut = () => {
    setUser({});
    setPathName('/');
  }
  
  return (
    
  <div className="hero-head">
      <nav className="navbar background-gradient">
        <div className="container">
          <div className="navbar-brand">
            
              <img className= "navbar-item" src={logo}  alt="Logo" />
              
            
          </div>
              
          <div id="navbarMenuHeroB" className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                {
                  pathName === '/movements' 
                  && <button className="button is-right logout-btn" type="text" onClick={handleLogOut} > <strong>Log  out </strong></button>
                }
                </div>
              </div>
          </div>

        </div>
      </nav>
  </div>



  )
}

export default Navbar;