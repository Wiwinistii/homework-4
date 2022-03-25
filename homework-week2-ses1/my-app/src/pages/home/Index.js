import Song from "../../component/Song";
import "./Home.css";
import data from '../../Data.js'

function Index()  {
  return (
    <Song 
      url={data.album.images[0].url}
      albumName={data.album.name}
      artistsName={data.album.artists[0].name}
    />
  );
} 

export default Index;