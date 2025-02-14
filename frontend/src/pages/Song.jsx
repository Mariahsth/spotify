import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";
import Player from "../components/Player";



const Song = () => {
    const {id}= useParams();
    const songObj=songsArray.filter((currentSong) => currentSong._id === id)[0];
    const artistOfSong=artistArray.filter((currentArtist) =>currentArtist.name === songObj.artist )[0]

    const songsArrayFromArtist = songsArray.filter(
        (currentSongObj) => currentSongObj.artist === songObj.artist)

    const randomIndex = Math.floor(
        Math.random() * (songsArrayFromArtist.length - 1)
      );
    
    const randomIndex2 = Math.floor(
        Math.random() * (songsArrayFromArtist.length - 1)
    );

    const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
    const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id;



    return (
        <div className="song">

            <div className="song__container" >

                <div className="song__image-container">

                    <img src={songObj.image} alt={`Imagem da música ${songObj.name}`} />

                </div>

            </div>

            <div className="song__bar">
                <Link to={`/artist/${artistOfSong._id}`} className="song__artist-image"> 

                    <img
                    width={75}  
                    height={75}  
                    src={artistOfSong.image} 
                    alt={`Imagem do artista ${artistOfSong.name}`} />

                </Link>

                <Player 
                duration={songObj.duration}
                randomIdFromArtist={randomIdFromArtist}
                randomId2FromArtist={randomId2FromArtist}
                audio={songObj.audio} />

                <div>
                    <p className="song__name" >{songObj.name}</p>
                    <p>{artistOfSong.name}</p>
                </div>




            </div>

        </div>
    )
};

export default Song;