import React, { useState } from "react"

import Song from "./Song"

const SongCollection = (props) => {
  const [selectedSong, setSelectedSong] = useState(null)
  
  const songsArray = props.songs.map((songObject) => {
    
    // debugger

    const selectSongWrapper = () => {
      // debugger
      setSelectedSong(songObject.id)
    }

    let songStyle = ""

    if (songObject.id === selectedSong) {
      // debugger
      songStyle = "selected"
    }

    // debugger

    return (
      <Song 
        key={song.id}
        song={songObject}
        selectSongWrapper={selectSongWrapper}
        songStyle={songStyle}
      />
    )
  })

  // debugger

  return (
    <div className="cell small-6">
      <h1>Songs</h1>
      {songsArray}
    </div>
  )
}

export default SongCollection