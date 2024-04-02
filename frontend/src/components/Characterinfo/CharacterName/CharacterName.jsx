import React, { useState } from "react";
import "./characterName.css";

function CharacterName() {
  const [name, setName] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="characterName">
      <label htmlFor="characterName" id="Character_name">
        CHARACTER NAME
      </label>
      <input
        type="text"
        name="characterName"
        value={name}
        onChange={changeName}
        placeholder="Choose your name..."
      />
    </div>
  );
}

export default CharacterName;
