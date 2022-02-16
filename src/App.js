import { Routes, Route } from "react-router-dom";
import './App.css';

import CharactersList from './screens/CharactersList';
import CharacterSpecs from "./screens/CharacterSpecs";

function App() {
  return (
    <div className="App">
      <h1 className="text-teal-500 sm:text-center lg:text-left text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl block xl:inline">Rick and Morty - React</h1>
      <Routes>
        <Route path="/" element={<CharactersList />}></Route>
        <Route path="/charspecs" element={<CharacterSpecs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
