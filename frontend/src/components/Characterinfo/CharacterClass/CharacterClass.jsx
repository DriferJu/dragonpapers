import React, { useState, useEffect } from "react";
import axios from "axios";
import "./characterClass.css";
import useCharacter from "../../../context/CharacterContext";

function CharacterClass() {
  const [classes, setClasses] = useState([]);
  const { setPlayerClass } = useCharacter();

  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/classes")
      .then((response) => setClasses(response.data.results))
      .catch((error) => console.error("Error fetching classes:", error));
  }, []);

  return (
    <div className="inputBox-class">
      <label htmlFor="characterClass">Class</label>
      <select
        name="class"
        id="class-select"
        onChange={(e) => setPlayerClass(e.target.value)}
      >
        {" "}
        <option value="">Choose your Class...</option>
        {classes.map((playerClass) => (
          <option key={playerClass.name} value={playerClass.index}>
            {playerClass.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CharacterClass;
