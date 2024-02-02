import { useState } from 'react';
import AddFriendFrom from './AddFriendForm';
import Friend from './Friend';
import Button from './Button';

export default function FriendsList({ friends }) {
  const [isFriendOpen, setIsFriendOpen] = useState(false);
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
      {isFriendOpen ? <AddFriendFrom /> : null}

      <Button
        onClick={() => setIsFriendOpen((prevFriendOpen) => !prevFriendOpen)}
        className="button"
      >
        {isFriendOpen ? 'Close' : 'Add Friend'}
      </Button>
    </>
  );
}
