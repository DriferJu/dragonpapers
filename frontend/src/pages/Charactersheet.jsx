import React from "react";
import "../resetStyle.css";
import "../App.css";
import "./characterSheet_general.css";
import CharacterInfo from "../components/Characterinfo/CharacterInfo";
import Combat from "../components/Combat/Combat";
import HealthDice from "../components/Combat/HealthDice";
import CaracBloc from "../components/CaracBloc/CaracBloc";
import SpellBloc from "../components/SpellBloc/SpellBloc";
import EquipmentBloc from "../components/EquipmentBloc/EquipmentBloc";
import BonusPerceptionBloc from "../components/BonusPerceptionBloc/BonusPerceptionBloc";
import AttackNinc from "../components/Attacks&Inc/AttackNinc";
import SnakeDragon from "../assets/dnd_ico/snake-dragon.png";
import { CharacterProvider } from "../context/CharacterContext";

function CharacterSheet() {
  return (
    <CharacterProvider>
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
            <SpellBloc />
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
    </CharacterProvider>
  );
}

export default CharacterSheet;
