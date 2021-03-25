import React from 'react'
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'

const App = (props) => {
  let playlists = props.data.playlists
  let songs = props.data.songs

  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <PlaylistCollection playlists={playlists}/>
      <SongCollection songs={songs}/>
    </div>
  );
}

export default App
