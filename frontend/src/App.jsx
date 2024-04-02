import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
import CharacterSheet from "./pages/CharacterSheet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/charactersheet" element={<CharacterSheet />} />
    </Routes>
  );
}

export default App;
