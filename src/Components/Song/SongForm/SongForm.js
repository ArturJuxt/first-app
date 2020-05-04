import React, { useState } from 'react';

const SongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="songTitle">
          Name song:
          <input
            id="songTitle"
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <input type="submit" value="add song" />
      </form>
    </div>
  );
};

export default SongForm;
