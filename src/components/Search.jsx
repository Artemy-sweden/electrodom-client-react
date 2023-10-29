function SearchBox({ onChangeInputValue, inputValue }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="давай ищи..."
        onChange={onChangeInputValue}
        value={inputValue}
      />
    </div>
  );
}

export default SearchBox;
