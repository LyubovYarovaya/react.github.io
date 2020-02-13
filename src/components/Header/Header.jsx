import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return <header className={style.header}>
    <div className={style.logo}>
    <img src="https://pngimage.net/wp-content/uploads/2018/06/flower-logo-png-2.png" alt=""/>
    </div>
  </header>
}

export default Header;