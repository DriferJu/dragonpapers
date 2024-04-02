import React, { useState, useEffect } from "react";
import axios from "axios";
import "./characterAlignment.css";

function CharacterAlignment() {
  const [alignments, setAlignments] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/alignments")
      .then((response) => setAlignments(response.data.results))
      .catch((error) => console.error("Error fetching alignment:", error));
  }, []);

  return (
    <div className="inputBox-alignment">
      <label htmlFor="characterAlignment">Alignment</label>
      <select name="alignment" id="alignment-select">
        <option value="">Choose your Alignement...</option>
        {alignments.map((alignment) => (
          <option key={alignment.name} value={alignment.index}>
            {alignment.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CharacterAlignment;
