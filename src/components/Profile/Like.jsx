import React from 'react';
import style from './Like.module.css';

const Like = (props) => {
    return (
      <div className={style.img}>
        <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-favorite-2.png" alt=""/>
        <div className={style.count}>
          {props.count}
        </div>
      </div>
  )
}

export default Like;