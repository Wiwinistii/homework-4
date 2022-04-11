import "./Search.css";

function SearchForm({ onSearch, handleChange }) {
  return (
    <form onSubmit={onSearch}>
      <input type="text" id="inpuText" onChange={handleChange} required />
      <button className="buttonSearch" type="submit" value="submit">
        Search
      </button>
      <p> Search for the song you want and select it before create a playlist </p>
    </form>
  );
};

export default SearchForm;