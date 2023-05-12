import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';

function Navbar() {
  return (
    <header>
      <Link to="/" underline="none" className="logo"><SwitchAccountIcon /></Link>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/All_contact">All contact</Link></li>
        <li><Link to="/New_contact">New contact</Link></li>
      </ul>
    </header>
  )
}

export default Navbar