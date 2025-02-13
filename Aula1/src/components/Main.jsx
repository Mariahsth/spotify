/* eslint-disable react/prop-types */
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({type}) => {
  return (
    <div className="main">

      {type ==='artists' || type === undefined ?       
      <ItemList title="Artistas" itens={10} array={artistArray} path='/artists' idPath='/artist' />
      : <></>}

        {type === 'songs' || type === undefined ?
        <ItemList title="Músicas" itens={20} array={songsArray} path='/songs' idPath='/song'/>
        : <></>
      }

      

      
    </div>
  );
};

export default Main;
