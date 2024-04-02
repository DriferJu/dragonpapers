import React, { useState, useEffect } from "react";
import axios from "axios";
import "./characterRace.css";
import useCharacter from "../../../context/CharacterContext";

function CharacterRace() {
  const [races, setRaces] = useState([]);
  const { setPlayerRace } = useCharacter();

  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/races")
      .then((response) => setRaces(response.data.results))
      .catch((error) => console.error("Error fetching races:", error));
  }, []);

  return (
    <div className="inputBox-race">
      <label htmlFor="characterRace">Race</label>
      <select
        name="race"
        id="race-select"
        onChange={(e) => setPlayerRace(e.target.value)}
      >
        <option value="">Choose your Race...</option>
        {races.map((race) => (
          <option key={race.name} value={race.index}>
            {race.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CharacterRace;
