import React from 'react';
import style from './Profile.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
    return <div className={style.content}>
      <div>
        <ProfileInfo />
      </div>
      <div>
        <MyPost posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost} />
      </div>
    </div>
}

export default Profile;