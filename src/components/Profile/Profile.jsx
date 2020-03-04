import React from 'react';
import style from './Profile.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {

  let postElem = props.state.posts.map( p => <MyPost message={p.message} count={p.likeCount} /> )

  let newPostElem = React.createRef();

  let addPost = () => {
    let text = newPostElem.current.value;
    props.addPost(text);
    newPostElem.current.value = '';
  }
    return <div className={style.content}>
    <div>
      <div>
        <ProfileInfo />
      </div>
      
    </div>
    <div>
    <textarea ref={newPostElem} name="text"></textarea>
    <div>
      <button onClick={addPost}>Add post</button>
    </div>
     
    </div>
    {postElem}
  </div>
}

export default Profile;