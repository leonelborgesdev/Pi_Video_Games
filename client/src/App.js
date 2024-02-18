import { Landing } from "./Landign/Landing.jsx";
import { VideoGames } from "./VideoGames/VideoGames.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/videogames" element={<VideoGames />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
