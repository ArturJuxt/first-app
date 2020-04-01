import React from 'react';
import "./Profile.module.css";
import UpPost from './MyPosts/UpPost/UpPost';
import DownPost from './MyPosts/DownPost/DownPost';

function Profile(props) {

    let postElements = props.posts.map( p => <DownPost id={p.id} message={p.message} likeCount={p.likeCount} />);

    return (
        <div>
            <UpPost />
            { postElements }
        </div>
    );
}

export default Profile