import React from 'react';
import s from "./Profile.module.css";
import UpPost from './MyPosts/UpPost/UpPost';
import DownPost from './MyPosts/DownPost/DownPost';


function Profile() {
    return (
        <div>
            <UpPost />
            <DownPost message='aaaaaaa'/>
            <DownPost message='bbbbbbb'/>

        </div>
    );
}



export default Profile