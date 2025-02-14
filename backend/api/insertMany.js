import { artistArray } from "../../frontend/src/assets/database/artists.js"
import { songsArray } from "../../frontend/src/assets/database/songs.js"
import { db } from "./connect.js";


const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(timeInSeconds - minutes * 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };
  

  const timeInSeconds = (timeString) => {
    const splitArray = timeString.split(":");
    const minutes = Number(splitArray[0]);
    const seconds = Number(splitArray[1]);
  
    return seconds + minutes * 60;
  };

      const newArtistArray= artistArray.map((currentArtistObj) => {
          const newArtistObj= {...currentArtistObj};
          delete newArtistObj.id
          return newArtistObj
      })
      
      const newSongArray= songsArray.map((currentSongObj) => {
          const newSongObj= {...currentSongObj};
          delete newSongObj.id
          return newSongObj
      })

      const newSongFormatado= newSongArray.map((currentSongObj) => {
          const duration=formatTime(timeInSeconds(currentSongObj.duration))
          const newSongObj= {...currentSongObj, duration};
        return newSongObj
    })


    const responseSongs = await db.collection('songs').insertMany(newSongFormatado);
    const responseArtists = await db.collection('artists').insertMany(newArtistArray);


      console.log(responseSongs)
      console.log(responseArtists)