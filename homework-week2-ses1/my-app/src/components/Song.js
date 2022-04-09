import './Song.css';

function Song(props)  {
  return (
    <div className="Song">
      <img src={props.url} alt={props.alt}></img>
      <div className="text" >
        <p className="album">{props.albumName}</p>
        <p>{props.artistName}</p>
      </div>
      <div className='button'>
        <button type="button" className='btn' onClick={() => props.onClick (props.isSelected)}>
          {props.nameOfButton}
          </button>
        </div>
      </div>
    );
}

export default Song;