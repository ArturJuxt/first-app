import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SongForm from '../SongForm/SongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'Modern', id: 1 },
    { title: 'Bony M', id: 2 },
  ]);

  const [age, setAge] = useState(20);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv4() }]);
  };

  return (
    <div>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <SongForm addSong={addSong} />
      <button type="button" onClick={() => setAge(age + 1)}>
        Add 1 to age: {age}
      </button>
    </div>
  );
};

export default SongList;
