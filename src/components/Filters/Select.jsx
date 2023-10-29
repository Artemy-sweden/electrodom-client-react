function Select({ item }) {
  return (
    <label className="checkbox">
      <input type="checkbox" />
      <p>{item}</p>
    </label>
  );
}

export default Select;
