import "./Search.css";

<<<<<<< HEAD:homework-week2-ses1/my-app/src/component/playlist/Search.js
function SearchForm ({ onSearch, handleChange, handlePlaylist }) {
  return (
    <form onSubmit={onSearch}>
      <input type="text" id="inpuText" onChange={handleChange} required/>
=======
function SearchForm({ onSearch, handleChange }) {
  return (
    <form onSubmit={onSearch}>
      <input type="text" id="inpuText" onChange={handleChange} required />
>>>>>>> 036202cb11c4a65cd9053764b509f0dbf19ee304:homework-week2-ses1/my-app/src/components/playlist/Search.js
      <button className="buttonSearch" type="submit" value="submit">
        Search
      </button>
      <p> Search for the song you want and select it before create a playlist </p>
    </form>
  );
}

export default SearchForm;