import React from 'react';
import s from './DownPost.module.scss';

function DownPost(props) {
  return (
    <div className={s.DownPost}>
      <div className={s.item}>
        {props.message}
        <span>Like</span>
        {props.likeCount}
      </div>
    </div>
  );
}

export default DownPost;
