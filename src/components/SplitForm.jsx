import { useState } from 'react';
import Button from './Button';

export default function SplitForm({
  selectedFriend,
  onSetFriends,
  friends,
  onSetSelectedFriend,
}) {
  const [bill, setBill] = useState('');
  const [myExpense, setMyExpense] = useState('');
  const [billPayer, setBillPayer] = useState('You');

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || myExpense < 0) return;

    if (billPayer === 'You') {
      onSetFriends(
        friends.map((friend) => {
          if (friend === selectedFriend) {
            return {
              ...friend,
              balance:
                myExpense > friend.balance
                  ? bill - myExpense + friend.balance
                  : friend.balance + (bill - myExpense),
            };
          } else {
            return friend;
          }
        }),
      );
      onSetSelectedFriend(null);
    } else if (billPayer === 'Friend') {
      onSetFriends(
        friends.map((friend) => {
          if (friend === selectedFriend) {
            return { ...friend, balance: friend.balance - myExpense };
          } else {
            return friend;
          }
        }),
      );
      onSetSelectedFriend(null);
    }
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split Bill with {selectedFriend.name}</h2>

      <label>💰 Bill Value:</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍🏼‍♂️ Your expense:</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) =>
          setMyExpense(
            Number(e.target.value) > bill ? myExpense : Number(e.target.value),
          )
        }
      />

      <label>👨🏻‍🤝‍👨🏾 {selectedFriend.name}'s expense:</label>
      <input type="text" disabled value={bill ? bill - myExpense : ''} />

      <label>🤑 Who is paying the bill?</label>
      <select value={billPayer} onChange={(e) => setBillPayer(e.target.value)}>
        <option value="You">You</option>
        <option value="Friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
