import React, {useState} from 'react'
import Playlist from './Playlist'

const PlaylistCollection = props => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)

  // onClick to set correct State
  // change the styling of the playlist component
  // check if playlist is selected or not

  // wrapper function for the setter

  
  
  let playlistsArray = props.playlists.map(playlistObject => {
    let playlistStyle = ""
    
    const selectPlaylistWrapper = () => {
      setSelectedPlaylist(playlistObject.id)
    }

    if(playlistObject.id === selectedPlaylist){
      playlistStyle = "selected"
    }

    return <Playlist 
                key={playlistObject.id} 
                selectPlaylistWrapper={selectPlaylistWrapper} 
                playlistData={playlistObject} 
                playlistStyle={playlistStyle} />
  } ) 

  return (
    <div>
      <h1>Playlists</h1>
      {playlistsArray}
    </div>
  )
}

export default PlaylistCollection;