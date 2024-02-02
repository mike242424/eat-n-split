import { useState } from 'react';
import Button from './Button';

export default function SplitForm({ selectedFriend }) {
  const [bill, setBill] = useState('');
  const [myExpense, setMyExpense] = useState('');
  const [friendExpense, setFriendExpense] = useState('');
  return (
    <form className="form-split-bill">
      <h2>Split Bill with {selectedFriend.name}</h2>

      <label>💰 Bill Value:</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>🧍🏼‍♂️ Your expense:</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) => setMyExpense(e.target.value)}
      />

      <label>👨🏻‍🤝‍👨🏾 {selectedFriend.name}'s expense:</label>
      <input type="text" disabled value={bill - myExpense} />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="You">You</option>
        <option value="Friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
