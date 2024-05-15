import React from "react";
import "../resetStyle.css";
import "../App.css";
import "./characterSheet_general.css";
import CharacterInfo from "../components/Characterinfo/CharacterInfo";
import Combat from "../components/Combat/Combat";
import HealthDice from "../components/Combat/HealthDice";
import CaracBloc from "../components/CaracBloc/CaracBloc";
import RaceTraitsBloc from "../components/RaceTraitsBloc/RaceTraitsBloc";
import FeaturesBloc from "../components/FeaturesBloc/FeaturesBloc";
import SpellBloc from "../components/SpellBloc/SpellBloc";
import EquipmentBloc from "../components/EquipmentBloc/EquipmentBloc";
import BonusPerceptionBloc from "../components/BonusPerceptionBloc/BonusPerceptionBloc";
import AttackNinc from "../components/Attacks&Inc/AttackNinc";
import SnakeDragon from "../assets/dnd_ico/snake-dragon.png";
import { CharacterProvider } from "../context/CharacterContext";
import useCharacter from "../context/CharacterContext";

function CharacterSheet() {
  const { playerClass, playerLevel, playerRace } = useCharacter();

  return (
    <div>
      <div className="result Sheet_smartphone" id="CHARACTERS_SHEET">
        <CharacterInfo />
        <BonusPerceptionBloc />
        <CaracBloc />
        <Combat />
        {window.innerWidth < 1024 && <HealthDice />}
        <AttackNinc />
        <SpellBloc />
        <EquipmentBloc />
        <div className="PositionSnakeDragon">
          <img src={SnakeDragon} alt="snake dragon" id="snakeDragon" />
        </div>
      </div>
      <div className="result Sheet_desktop" id="CHARACTERS_SHEET">
        <div id="DesktopTopLine">
          <CharacterInfo />
        </div>
        <div className="Desktop_columns_content">
          <div id="DesktopLeftColumn">
            <BonusPerceptionBloc />
            <CaracBloc />
            {playerRace && playerRace !== "Human" && <RaceTraitsBloc/>}
            {playerClass &&  playerLevel && <FeaturesBloc/>}
            {(playerClass === "bard" ||
              playerClass === "cleric" ||
              playerClass === "druid" ||
              playerClass === "paladin" ||
              playerClass === "ranger" ||
              playerClass === "sorcerer" ||
              playerClass === "warlock" ||
              playerClass === "wizard") && playerLevel && <SpellBloc />}

            <div className="PositionSnakeDragon">
              <img src={SnakeDragon} alt="snake dragon" id="snakeDragon" />
            </div>
          </div>
          <div id="DesktopRightColumn">
            <Combat />
            {window.innerWidth < 1024 && <HealthDice />}
            <AttackNinc />
            <EquipmentBloc />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WrappedCharacterSheet() {
  return (
    <CharacterProvider>
      <CharacterSheet />
    </CharacterProvider>
  );
}
