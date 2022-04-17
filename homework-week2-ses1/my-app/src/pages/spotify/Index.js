import React, { useState } from "react";
import "../spotify/Spotify.css";
<<<<<<< HEAD
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
=======
import Song from "../../components/Song";
import useSearch from "../../hooks/Use";
import PlaylistCard from "../../components/playlist/Card"
import PlaylistForm from "../../components/playlist/Form";
import SearchForm from "../../components/playlist/Search";
import useCreatePlaylist from "../../hooks/CreatePlaylist";

function Spotify() {
  const { searchResult, handleChange, onSearch } = useSearch();
  const {
    handlePlaylist,
    handleForm,
    handleNotSelected,
>>>>>>> 036202cb11c4a65cd9053764b509f0dbf19ee304
    handleSelected,
    isLoggedOut,
    handleView,
    newPlaylist,
    check,
<<<<<<< HEAD
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
=======
    isSelected,
  } = useCreatePlaylist();

  return (
    <div className="container">
      <div className="header">
        <SearchForm onSearch={onSearch} handleChange={handleChange} />
        <button type="submit" onClick={isLoggedOut}>
          Logout
        </button>
>>>>>>> 036202cb11c4a65cd9053764b509f0dbf19ee304
      </div>

      <div className="formAndView">
        <div className="create-playlist">
          <p className="createTitle">Create Playlist</p>
          <PlaylistForm
            onCreate={handlePlaylist}
            handleChangeTitle={handleForm}
            handleChangeDesc={handleForm}
          />
        </div>
        {/* <div className="viewPlaylist">
          <button type="submit" onClick={handleView}>
            View Playlist
          </button>
        </div> */}
      </div>
      <div className="spotify-track">
        <p className="searchTitle">Search Result</p>
        {searchResult.length === 0 ? (
          <p className="emptyResult">No result</p>
        ) : (
          <div className="listOf-track">
            {searchResult.map((item) => (
              <CardSong
                url={item.album.images[0].url}
                albumName={item.album.name}
                artistName={item.artists[0].name}
                alt="Image not loaded"
                key={item.uri}
                isSelected={isSelected.includes(item.uri)}
                onClick={(isSelect) =>
                  isSelect
                    ? handleSelected(item.uri)
                    : handleNotSelected(item.uri)
                }
                nameOfButton={
                  isSelected.includes(item.uri) ? "Deselect" : "Select"
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Spotify;