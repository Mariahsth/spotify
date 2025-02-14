import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import { Link, useParams } from "react-router-dom";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SongList from "../components/SongList";



const Artist = () => {
    const {id}= useParams()
    const artistObj=artistArray.filter((currentArtist) => currentArtist._id === id)[0]
    const songsArrayFromArtist=songsArray.filter((currentSong) =>currentSong.artist === artistObj.name )

    const randomIndex = Math.floor(
        Math.random() * (songsArrayFromArtist.length - 1)
      );
      const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;

    return (
        <div className="artist">
            <div className="artist__header"
            style={{backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artistObj.banner})`}}>
            
                <h2 className="artist__title">{artistObj.name}</h2>

            </div>
            <div className="artist__body">

                <h2>Populares</h2>
                <SongList songsArray={songsArrayFromArtist} />
            </div>

            <Link to={`/song/${randomIdFromArtist}`}>
                <FontAwesomeIcon className="single-item__icon single-item__icon--artist" icon={faCirclePlay} />
            </Link>

        </div>
    )
};

export default Artist;