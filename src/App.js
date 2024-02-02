import { useState } from 'react';
import FriendsList from './components/FriendsList';
import SplitForm from './components/SplitForm';
import AddFriendFrom from './components/AddFriendForm';
import Button from './components/Button';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [isFriendOpen, setIsFriendOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSetFriends={setFriends}
          onSetSelectedFriend={setSelectedFriend}
          selectedFriend={selectedFriend}
          onSetIsFriendOpen={setIsFriendOpen}
        />

        {isFriendOpen && (
          <AddFriendFrom
            onSetFriends={setFriends}
            onSetIsFriendOpen={setIsFriendOpen}
          />
        )}

        <Button
          onClick={() => setIsFriendOpen((prevFriendOpen) => !prevFriendOpen)}
        >
          {isFriendOpen ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      {selectedFriend && (
        <SplitForm
          selectedFriend={selectedFriend}
          onSetFriends={setFriends}
          friends={friends}
          onSetSelectedFriend={setSelectedFriend}
        />
      )}
    </div>
  );
}
