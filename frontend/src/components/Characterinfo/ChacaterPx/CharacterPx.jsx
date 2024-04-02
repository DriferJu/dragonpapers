import React, { useState } from "react";

function CharacterPx() {
  const [px, setPx] = useState("");

  const changePx = (event) => {
    setPx(event.target.value);
  };

  return (
    <div className="inputBox-px">
      <label htmlFor="characterPx">PX</label>
      <input
        type="text"
        name="characterPx"
        value={px}
        onChange={changePx}
        placeholder="0"
      />
    </div>
  );
}

export default CharacterPx;
