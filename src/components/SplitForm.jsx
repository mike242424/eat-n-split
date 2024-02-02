import Button from './Button';

export default function SplitForm({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split Bill with {selectedFriend.name}</h2>

      <label>💰 Bill Value:</label>
      <input type="text" />

      <label>🧍🏼‍♂️ Your expense:</label>
      <input type="text" />

      <label>👨🏻‍🤝‍👨🏾 {selectedFriend.name}'s expense:</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="You">You</option>
        <option value="Friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
