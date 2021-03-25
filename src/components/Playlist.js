import React from 'react';

const Playlist = (props) => {

  let playlistName = props.playlistData.name;
  return (
    <h2 className={props.playlistStyle} onClick={props.selectPlaylistWrapper}>{playlistName}</h2>
  )
}

export default Playlist

