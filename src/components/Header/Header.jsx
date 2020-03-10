import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return <header className={style.header}>
    <div className={style.logo}>
      <img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/logo/logo.png" alt="logo"/>
    </div>
    <div className={style.infoHead}>
      <img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/banner/profile-banner.jpg" width="1080px"  alt=""/>
    </div>
  </header>
}

export default Header;