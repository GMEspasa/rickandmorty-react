import { Routes, Route } from "react-router-dom";
import './App.css';


import CharactersList from './screens/CharactersList';
import CharacterSpecs from "./screens/CharacterSpecs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList />}></Route>
        <Route path="/charspecs" element={<CharacterSpecs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
