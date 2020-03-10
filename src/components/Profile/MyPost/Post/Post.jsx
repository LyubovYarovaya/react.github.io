import React from 'react';
import style from './../MyPost.module.css';

const Post = (props) => {

    return (
      <div className={style.item}>
      <img src='https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-small-37.jpg' />
        { props.message }
          <div>
        <div className={style.img}>
          <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-favorite-2.png" alt=""/>
          <div className={style.count}>
            {props.count}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;