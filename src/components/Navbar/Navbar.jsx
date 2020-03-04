import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <nav className={style.nav}>
    <ul>
      <li><NavLink  className={style.item} activeClassName={style.active}  to="/profile">My page</NavLink ></li>
      <li><NavLink  className={style.item} activeClassName={style.active}  to="/dialogs">Message</NavLink ></li>
      <li><NavLink  className={style.item}  to="#">Photo</NavLink></li>
      <li><NavLink  className={style.item}  to="#">Video</NavLink></li>
      <li><NavLink  className={style.item}  to="#">Friends</NavLink></li>
    </ul>
</nav>
}

export default Navbar;