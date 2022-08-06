import Header from "./header/Header";
import SearchBar from "./searchBar/SearchBar";
import Scrolling from "./Scrolling";
import TodoList from "./todo/components/TodoList";
import Game from "./game/Game";
import GameStart from "./gameStart/GameStart";
import GameEnd from "./gameEnd/GameEnd";
import { Routes, Route } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GameStart />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game-end" element={<GameEnd />} />
      </Routes>
    </div>
  );
}

export default App;
