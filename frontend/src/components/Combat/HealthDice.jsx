import { useState, useEffect } from "react";
import "./HealthDice.css";
import diceImg from "../../assets/dnd_ico/d20.png";
import useCharacter from "../../context/CharacterContext";

function HealthDice() {
  const [healthDiceNumber, setHealthDiceNumber] = useState(0);
  const [setHealthDice] = useState("");

  const { playerHealthDice, setPlayerHealthDice, playerClass } = useCharacter();

  useEffect(() => {
    switch (playerClass) {
      case "barbarian":
        setPlayerHealthDice("D12");
        break;
      case "bard":
        setPlayerHealthDice("D8");
        break;
      case "cleric":
        setPlayerHealthDice("D8");
        break;
      case "druid":
        setPlayerHealthDice("D8");
        break;
      case "fighter":
        setPlayerHealthDice("D10");
        break;
      case "monk":
        setPlayerHealthDice("D8");
        break;
      case "paladin":
        setPlayerHealthDice("D10");
        break;
      case "ranger":
        setPlayerHealthDice("D10");
        break;
      case "rogue":
        setPlayerHealthDice("D8");
        break;
      case "sorcerer":
        setPlayerHealthDice("D6");
        break;
      case "warlock":
        setPlayerHealthDice("D8");
        break;
      case "wizard":
        setPlayerHealthDice("D6");
        break;
      default:
        setPlayerHealthDice("0");
        break;
    }
  }, [playerClass]);

  const handleHealthDiceChange = (e) => {
    const { value } = e.target;
    const numericValue = value.replace(/\D/g, "");
    const validValues = ["4", "6", "8", "10", "12", "1", ""];
    if (validValues.includes(numericValue)) {
      setHealthDice(`D${numericValue}`);
    }
  };

  const decreaseDiceNumber = () => {
    if (healthDiceNumber > 0) {
      setHealthDiceNumber(parseInt(healthDiceNumber, 10) - 1);
    }
  };
  const increaseDiceNumber = () => {
    setHealthDiceNumber(parseInt(healthDiceNumber, 10) + 1);
  };

  return (
    <div className="healthDiceBlock">
      <img src={diceImg} alt="dice" className="Dice" />

      <div className="healthDiceNumber">
        <p>Nb of</p>
        <div className="addRemoveDiceNumber">
          <button
            type="button"
            className="addDice"
            onClick={decreaseDiceNumber}
          >
            -
          </button>
          <input
            type="text"
            value={healthDiceNumber}
            className="healthDiceNumberInput"
            onChange={(e) => {
              const numericValue = parseInt(e.target.value, 10);
              if (!Number.isNaN(numericValue) && numericValue >= 0) {
                setHealthDiceNumber(numericValue);
              }
            }}
          />
          <button
            type="button"
            className="addDice"
            onClick={increaseDiceNumber}
          >
            +
          </button>
        </div>
      </div>
      <div className="healthDice">
        <p>HP Dice</p>
        <input
          type="text"
          value={playerHealthDice}
          onChange={handleHealthDiceChange}
          className="healthDiceInput"
        />
      </div>
    </div>
  );
}

export default HealthDice;
