import Song from "../../component/Song";
import "./Home.css";
import data from '../../Data.js'

function Index()  {
  return (
    <div className="data-song"> 
    {data.map((data, indx)=> {
      return (
        <Song
        url={data.album.images[0].url}
        albumName={data.album.name}
        artistsName={data.album.artists[0].name}
        alt="Image not loaded"
    />
    )
  })}
    </div>
  );
} 

export default Index;