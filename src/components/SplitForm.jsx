import Button from './Button';

export default function SplitForm() {
  return (
    <form className="form-split-bill">
      <h2>Split Bill with Clark</h2>

      <label>💰 Bill Value:</label>
      <input type="text" />

      <label>🧍🏼‍♂️ Your expense:</label>
      <input type="text" />

      <label>👨🏻‍🤝‍👨🏾 Clark's expense:</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="You">You</option>
        <option value="Clark">Clark</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
