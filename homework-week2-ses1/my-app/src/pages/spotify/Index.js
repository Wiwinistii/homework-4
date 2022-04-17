import React, { useState } from "react";
import "../spotify/Spotify.css";
import Song from "../../component/Song";
import useSearch from "../../Use";
import PlaylistCard from "../../component/playlist/Card";
import PlaylistForm from "../../component/playlist/Form";
import SearchForm from "../../component/playlist/Search";
import useCreatePlaylist from "../../CreatePlaylist";

function Spotify() {
  const { searchResult, handleChange, onSearch } = useSearch();
  const { 
    handlePlaylist, 
    handleForm, 
    handleNotSelected, 
    handleSelected,
    isLoggedOut,
    handleView,
    newPlaylist,
    check,
    isSelected
  } = useCreatePlaylist();

  return (
      <div className="container">
        <div className="link-toSpotify">
        <button type="submit" onClick={isLoggedOut}>
          Logout
        </button>
        </div>
        <div className="formAndView">
          <div className="create-playlist">
            <PlaylistForm
              onCreate={handlePlaylist}
              handleChangeTitle={handleForm}
              handleChangeDesc={handleForm}
            />
          </div>
          <div className="ViewPlaylist">
            <button type="submit" onClick={handleView}>
              View Playlist
            </button>
          </div>
        </div>
        <div className="twoSided">
          <div className="spotify-track">
            <SearchForm onSearch={onSearch} handleChange={handleChange} />
            <div className="listOf-track">
              {searchResult.map((item) => (
                <Song
                  url={item.album.images[0].url}
                  albumName={item.album.name}
                  artistName={item.artists[0].name}
                  alt="Image not loaded"
                  key={item.uri}
                  isSelected={isSelected.includes(item.uri)}
                  onClick={(isSelect) =>
                    // eslint-disable-next-line implicit-arrow-linebreak
                    isSelect
                      ? handleSelected(item.uri)
                      : handleNotSelected(item.uri)}
                  nameOfButton={
                    isSelected.includes(item.uri) ? "Deselect" : "Select"
                  }
                />
              ))}
            </div>
          </div>
          <div className="playlistTrack">
            <div className="playlistWrapper">
              <p>{newPlaylist?.viewPlaylist.name}</p>
              {check.emptyView ? (
                <p></p>
              ) : (
                newPlaylist?.viewPlaylist?.tracks?.items?.map((item) => (
                  <PlaylistCard
                    url={item.track.album.images[0].url}
                    alt="Not loaded"
                    albumName={item.track.album.name}
                    artistName={item.track.artists[0].name}
                    key={item.track.uri}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Spotify;