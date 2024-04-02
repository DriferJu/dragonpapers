import CharacterName from "./CharacterName/CharacterName";
import CharacterLevel from "./CharacterLevel/CharacterLevel";
import CharacterPx from "./ChacaterPx/CharacterPx";
import CharacterClass from "./CharacterClass/CharacterClass";
import CharacterRace from "./CharacterRace/CharacterRace";
import CharacterAlignment from "./CharacterAlignment/CharacterAlignment";
import dragon from "../../assets/dnd_ico/dragon.png";
import barbarian from "../../assets/dnd_ico/barbarian.png";
import bard from "../../assets/dnd_ico/bard.png";
import cleric from "../../assets/dnd_ico/cleric.png";
import druid from "../../assets/dnd_ico/drood.png";
import fighter from "../../assets/dnd_ico/fighter.png";
import monk from "../../assets/dnd_ico/monk.png";
import paladin from "../../assets/dnd_ico/paladin.png";
import ranger from "../../assets/dnd_ico/ranger.png";
import rogue from "../../assets/dnd_ico/rogue.png";
import sorcerer from "../../assets/dnd_ico/sorcerer.png";
import warlock from "../../assets/dnd_ico/warlock.png";
import wizard from "../../assets/dnd_ico/wizard2.png";
import Arrow from "../../assets/dnd_ico/Arrow_6.png";
import reddragon from "../../assets/dnd_ico/D&D-3.png";
import "./characterinfo.css";
import useCharacter from "../../context/CharacterContext";

function CharacterInfo() {
  const isMobile = window.innerWidth < 1024;

  const { playerClass } = useCharacter();
  const classToImage = {
    barbarian,
    bard,
    cleric,
    druid,
    fighter,
    monk,
    paladin,
    ranger,
    rogue,
    sorcerer,
    warlock,
    wizard,
  };

  const characterImage = classToImage[playerClass] || dragon;
  return (
    <form className="newCharacter_form">
      <div id="CharacName_top_line">
        <img src={reddragon} className="reddragon" alt="reddragon-input" />
        <div className="characterName_container">
          <CharacterName />
        </div>
      </div>
      <div className="form_container">
        <div className="form_inner">
          {!isMobile && <img src={Arrow} className="Arrow" alt="Arrow-input" />}
          <img src={characterImage} className="dragon" alt="dragon-input" />
          <CharacterRace />
          <CharacterClass />
          <CharacterAlignment />
          <CharacterLevel />
          <CharacterPx />
        </div>
      </div>
    </form>
  );
}

export default CharacterInfo;
