import { AboutMe } from "./Components/AboutMe/AboutMe.jsx";
import { CreateVideoGames } from "./Components/CreateVideoGames/CreateVideoGames.jsx";
import { DeleteVideoGame } from "./Components/DeleteVideoGame/DeleteVideoGame.jsx";
import { DetalleVideoGames } from "./Components/DetalleVideoGames/DetalleVideoGames.jsx";
import { Landing } from "./Components/Landign/Landing.jsx";
import { VideoGames } from "./Components/VideoGames/VideoGames.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/videogames" element={<VideoGames />} />
          <Route path="/videogames/:id" element={<DetalleVideoGames />} />
          <Route path="/videogames/create" element={<CreateVideoGames />} />
          <Route path="/videogames/delete" element={<DeleteVideoGame />} />
          <Route path="/videogames/aboutMe" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
