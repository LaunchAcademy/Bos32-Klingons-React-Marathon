import React from "react"
import PlaylistCollection from "./PlaylistCollection"
import SongCollection from "./SongCollection"

const App = (props) => {
  
  // debugger

  let playlists = props.data.playlists
  let songs = props.data.songs

  // debugger

  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <div className="grid-x">
        <PlaylistCollection playlists={playlists}/>
        <SongCollection songs={songs}/>
      </div>
    </div>
  );
}

export default App
