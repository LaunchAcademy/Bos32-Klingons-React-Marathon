import React, { useState } from "react"

import Playlist from "./Playlist"

const PlaylistCollection = (props) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)

  let playlistsArray = props.playlists.map((playlistObject) => {
    
    // debugger

    const selectPlaylistWrapper = () => {
      // debugger
      setSelectedPlaylist(playlistObject.id)
    }
    
    let playlistStyle = ""

    if (playlistObject.id === selectedPlaylist) {
      // debugger
      playlistStyle = "selected"
    }

    // debugger

    return (
      <Playlist 
        key={playlistObject.id}
        playlistData={playlistObject}
        selectPlaylistWrapper={selectPlaylistWrapper}
        playlistStyle={playlistStyle}
      />
    )
  })

  // debugger

  return (
    <div className="cell small-6">
      <h1>Playlists</h1>
      {playlistsArray}
    </div>
  )
}

export default PlaylistCollection