/* eslint-disable react/prop-types */
import { useState } from "react"
import SongItem from "./SongItem"


const SongList = ({songsArray}) => {
    let [itens, setItens]=useState(5)

    return (
        <div className="song-list">

            {songsArray.filter((currentSong, index)=> index<itens ).map((currentSong, index)=> 
                <SongItem 
            {...currentSong}
            index={index}
            key={index} /> )}
            
            <p className="song-list__see-more" onClick={() => setItens(itens+5)}>Ver mais</p>
        </div>
    )
}

export default SongList