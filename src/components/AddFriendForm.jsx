import { useState } from 'react';
import Button from './Button';

export default function AddFriendFrom({ onSetFriends }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    onSetFriends((prevFriends) => [
      ...prevFriends,
      { id: Math.floor(Math.random() * 100000), name, image, balance: 0 },
    ]);

    setName('');
    setImage('');
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👨🏻‍🤝‍👨🏾 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🏙️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
