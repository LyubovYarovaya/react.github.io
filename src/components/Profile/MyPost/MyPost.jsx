import React from 'react';
import style from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {

  
  let postElem = props.posts.map( p => <Post message={p.message} count={p.likeCount} /> )
  let newPostElem = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElem.current.value;
    props.updateNewPostText(text);
  }

    return (
      <div className={style.wrap}>
        <div className={style.post}>
          <div className={style.ava}>
            <a href="#" alt="Ava"><img src="https://demo.hasthemes.com/adda-preview/adda/assets/images/profile/profile-1.jpg" alt="Ava"/></a>
          </div>
          <div className={style.addPost}>
              <textarea ref={newPostElem} name="text" onChange={onPostChange} value={props.newPostText}></textarea>
              <button onClick={addPost}>Add post</button>
          </div>
          <div className={style.postItem}>
            {postElem}
          </div>
        </div>
        
      </div>
  )
}

export default MyPost;