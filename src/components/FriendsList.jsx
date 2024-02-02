import Friend from './Friend';

export default function FriendsList({ friends, onSetFriends }) {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </>
  );
}
