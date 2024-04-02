import { createContext, useContext, useState, useMemo } from "react";
// import CharacterData from "../model/CharacterData";

const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  // CHAR INFOS
  // const [character, setCharacter] = useState(new CharacterData());
  const [playerClass, setPlayerClass] = useState("");
  const [playerRace, setPlayerRace] = useState("");
  const [playerLevel, setPlayerLevel] = useState(0);

  // STATS
  const [caracs, setCaracs] = useState([
    {
      caracName: "STR",
      caracValue: 8,
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "DEX",
      caracValue: 8,
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "CONST",
      caracValue: 8,
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "WIS",
      caracValue: 8,
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "INT",
      caracValue: 8,
      caracBonus: "+0",
      caracSave: "+0",
    },
    {
      caracName: "CHAR",
      caracValue: 8,
      caracBonus: "+0",
      caracSave: "+0",
    },
  ]);
  // const [character, setCharacter] = useState(new CharacterData());
  // SKILLS
  const [skillsBlocs, setSkillsBlocs] = useState([
    {
      skillBlocTitle: "STRENGTH BASED SKILLS",
      skillId: "strength",
      skills1: {
        name: "Athletics",
        value: "0",
      },
      display: "none",
    },
    {
      skillBlocTitle: "DEXTERITY BASED SKILLS",
      skillId: "dexterity",
      skills1: {
        name: "Acrobatics",
        value: "0",
      },
      skills2: {
        name: "Sleight of Hand",
        value: "0",
      },
      skills3: {
        name: "Stealth ",
        value: "0",
      },
    },
    {
      skillBlocTitle: "DEXTERITY BASED SKILLS",
      skillId: "dexterity",
      skills1: {
        name: "Acrobatics",
        value: "+x",
      },
      skills2: {
        name: "Sleight of Hand",
        value: "0",
      },
      skills3: {
        name: "Stealth ",
        value: "0",
      },
    },
    {
      skillBlocTitle: "WISDOM BASED SKILLS",
      skillId: "wisdom",
      skills1: {
        name: "Animal Handling",
        value: "0",
      },
      skills2: {
        name: "Insight",
        value: "0",
      },
      skills3: {
        name: "Medicine",
        value: "0",
      },
      skills4: {
        name: "Perception",
        value: "0",
      },
      skills5: {
        name: "Survival",
        value: "0",
      },
    },
    {
      skillBlocTitle: "INTELLIGENCE BASED SKILLS",
      skillId: "intelligence",
      skills1: {
        name: "Arcane",
        value: "0",
      },
      skills2: {
        name: "History",
        value: "0",
      },
      skills3: {
        name: "Investigation",
        value: "0",
      },
      skills4: {
        name: "Nature",
        value: "0",
      },
      skills5: {
        name: "Religion",
        value: "0",
      },
    },

    {
      skillBlocTitle: "CHARISMA BASED SKILLS",
      skillId: "charisma",
      skills1: {
        name: "Deception",
        value: "0",
      },
      skills2: {
        name: "Intimidation",
        value: "0",
      },
      skills3: {
        name: "Persuasion",
        value: "0",
      },
      skills4: {
        name: "Performance",
        value: "0",
      },
    },
  ]);
  // HEALTH
  const [playerHealthDice, setPlayerHealthDice] = useState("");
  // COMBAT
  // EQUIPEMENT
  // DEATHSAVE
  // Theme
  const [color, setColor] = useState("red");

  const value = useMemo(
    () => ({
      playerClass,
      setPlayerClass,
      playerRace,
      setPlayerRace,
      color,
      setColor,
      caracs,
      setCaracs,
      playerLevel,
      setPlayerLevel,
      playerHealthDice,
      setPlayerHealthDice,
      skillsBlocs,
      setSkillsBlocs,
    }),
    [
      playerClass,
      playerRace,
      playerLevel,
      playerHealthDice,
      skillsBlocs,
      color,
      caracs,
    ]
  );

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}

const useCharacter = () => useContext(CharacterContext);
export default useCharacter;
