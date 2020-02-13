import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return <nav className={style.nav}>
    <ul>
      <li><a className={style.item} href="#">My page</a></li>
      <li><a className={style.item} href="#">Message</a></li>
      <li><a className={style.item} href="#">Photo</a></li>
      <li><a className={style.item} href="#">Video</a></li>
      <li><a className={style.item} href="#">Friends</a></li>
    </ul>
</nav>
}

export default Navbar;