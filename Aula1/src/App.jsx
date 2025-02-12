import Header from "./components/Headers";
import Artist from "./pages/Artist";
import Artists from "./pages/Artists";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Songs from "./pages/Songs";
import Song from "./pages/Song";


function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/artists" element={<Artists />}  />
        <Route path="/artist/:id" element={<Artist />}  />
        <Route path="/songs" element={<Songs />}  />
        <Route path="/song/:id" element={<Song />}  />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
