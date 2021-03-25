import React from "react"

const Song = (props) => {
  // debugger
  return (
    <li 
      className={props.songStyle} 
      onClick={props.selectSongWrapper}
    >
      {props.song.artist} - {props.song.name}
    </li>
  )
}

export default Song