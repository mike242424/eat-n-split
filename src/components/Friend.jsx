import Button from './Button';

export default function Friend({
  friend,
  onSetSelectedFriend,
  selectedFriend,
  onSetIsFriendOpen,
}) {
  function handleClick() {
    if (selectedFriend === friend) {
      onSetSelectedFriend(null);
    } else {
      onSetSelectedFriend(friend);
    }
    onSetIsFriendOpen(false);
  }
  return (
    <li className={selectedFriend === friend ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance === 0 ? (
        <p>You and {friend.name} are even</p>
      ) : friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      ) : (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      )}

      <Button onClick={handleClick}>
        {selectedFriend === friend ? 'Back' : 'Select'}
      </Button>
    </li>
  );
}
