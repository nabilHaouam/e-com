import './navbar.styles.css'
import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      
        <Link to="/"><Logo/></Link>
        
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
        </ul>
    </div>
  )
}

export default NavBar