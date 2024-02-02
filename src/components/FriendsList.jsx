import Friend from './Friend';

export default function FriendsList({
  friends,
  onSetSelectedFriend,
  selectedFriend,
}) {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSetSelectedFriend={onSetSelectedFriend}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </>
  );
}
