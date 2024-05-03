import React, { useState, useEffect } from "react";
import axios from "axios";
import "./characterClass.css";
import useCharacter from "../../../context/CharacterContext";

function CharacterClass() {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const { setPlayerClass, setPlayerWeaponKnowledge } = useCharacter();
  
  // useEffect(() => {
  //   axios
  //     .get("https://www.dnd5eapi.co/api/classes")
  //     .then((response) => setClasses(response.data.results))
  //     .catch((error) => console.error("Error fetching classes:", error));
  // }, []);

  useEffect(() => {
    axios
      .get("https://api.open5e.com/v1/classes/")
      .then((response) => {
        setClasses(response.data.results);
      })
      .catch((error) => console.error("Error fetching classes:", error));
  }, []);

  useEffect(() => {
    if (selectedClass) {
      setPlayerClass(selectedClass.slug);
      setPlayerWeaponKnowledge(selectedClass.prof_weapons);
    }
  }, [selectedClass]);

  const handleClassChange = (e) => {
    const selectedSlug = e.target.value;
    const selectedClassObject = classes.find((cls) => cls.slug === selectedSlug);
    setSelectedClass(selectedClassObject);
  };

  return (
    <div className="inputBox-class">
      <label htmlFor="characterClass">Class</label>
      <select name="class" id="class-select" onChange={handleClassChange}>
        <option value="">Choose your Class...</option>
        {classes.map((playerClass) => (
          <option key={playerClass.name} value={playerClass.slug}>
            {playerClass.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CharacterClass;
