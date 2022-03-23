import './Song.css';
import data from '../Data.js'

function Song()  {
    return (
      <div className="Song">
        <img src={data.album.images[0].url}></img>
        <div className="text" >
          <p>{data.album.name}</p>
          <p>{data.album.artists[0].name}</p>
        </div>
        <div className='button'>
        <button type="button" className='btn'>Add Playlist</button>
        </div>
      </div>
    );
}

export default Song;