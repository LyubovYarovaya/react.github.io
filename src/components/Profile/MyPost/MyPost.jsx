import React from 'react';
import style from './MyPost.module.css';

const MyPost = (props) => {

    return (
      <div className={style.wrap}>
        <div className={style.post}>
          <div className={style.item}>
            <a href="#"><img src="https://i.pinimg.com/564x/50/63/a3/5063a3299fd073d4c847e86cd6cec31e.jpg" alt=""/></a> 
          </div>
          {props.message}
        </div>
        <div className={style.img}>
          <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-favorite-2.png" alt=""/>
          <div className={style.count}>
            {props.count}
          </div>
        </div>
      </div>
  )
}

export default MyPost;