import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">

      <ItemList title="Artistas" itens={10} array={artistArray} path='/artists' idPath='/artist' />


      <ItemList title="Músicas" itens={20} array={songsArray} path='/songs' idPath='/song'/>
    </div>
  );
};

export default Main;
