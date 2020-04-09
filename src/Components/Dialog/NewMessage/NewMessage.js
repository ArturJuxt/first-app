import React from 'react';
import { useState } from 'react';

const NewMessage = () => {
  const [message, setMessage] = useState(' newMessage ');
  return (
    <form>
      <label>New:</label>
      <input
        type="text"
        value={message.newMessage}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="submit" value="Add" />
      <p>{JSON.stringify(message)}</p>
    </form>
  );
};

export default NewMessage;
