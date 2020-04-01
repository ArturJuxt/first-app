import React, { createRef } from 'react';
import s from './UpPost.module.scss';

function UpPost() {
  const newPostElement = createRef();

  const addPost = () => {
    const text = newPostElement.current.value;
    alert(text); // eslint-disable-line
  };

  return (
    <div className={s.UpPost}>
      <div className={s.fon}>
        <img
          alt="imag"
          src="https://sevres-associatif.fr/cos-judo/files/2012/04/fond-ecran-cos-judo.jpg"
        />
      </div>
      <div className={s.avatar}>
        <img
          alt="imag"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfnh15ypu2eIqVVT2nPPK0U-aNANPFCtNVJOfPKnE581Vpotcx"
        />
      </div>
      <div>Ava + description</div>
      <div>
        <h3>My posts</h3>
      </div>
      <div>New posts</div>
      <div>
        <textarea ref={newPostElement} />
        <div>
          <button type="button" onClick={addPost}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpPost;
