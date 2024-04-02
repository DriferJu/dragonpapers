import React, { useState, useEffect } from "react";
import "./bonusPerceptionBloc.css";
import joust from "../../assets/dnd_ico/joust.png";
import knife from "../../assets/dnd_ico/epee.png";
import Dragon from "../../assets/dnd_ico/dragon_2.png";
import useCharacter from "../../context/CharacterContext";
// import { func } from "prop-types";

function BonusPerceptionBloc() {
  const { caracs, playerClass, playerLevel } = useCharacter();
  const wisdomCarac = caracs.find((carac) => carac.caracName === "WIS");
  const wisdomValue = wisdomCarac ? wisdomCarac.caracValue : 0;

  const perceptionIsSkill = 0;
  const passivePerception =
    10 + Math.floor((wisdomValue - 10) / 2) + perceptionIsSkill;

  const [proficiencyBonus, setProficiencyBonus] = useState("");
  // console.log(playerClass)
  // console.log(playerLevel);
  // console.log(proficiencyBonus)

  useEffect(() => {
    switch (playerClass) {
      case "barbarian":
        if (playerLevel >= 1 && playerLevel <= 4) {
          setProficiencyBonus("+2");
        } else if (playerLevel >= 5 && playerLevel <= 8) {
          setProficiencyBonus("+3");
        } else if (playerLevel >= 9 && playerLevel <= 12) {
          setProficiencyBonus("+4");
        } else if (playerLevel >= 13 && playerLevel <= 16) {
          setProficiencyBonus("+5");
        } else if (playerLevel >= 17) {
          setProficiencyBonus("+6");
        }
        break;
      case "bard":
        if (playerLevel >= 1 && playerLevel <= 4) {
          setProficiencyBonus("+2");
        } else if (playerLevel >= 5 && playerLevel <= 8) {
          setProficiencyBonus("+3");
        } else if (playerLevel >= 9 && playerLevel <= 12) {
          setProficiencyBonus("+4");
        } else if (playerLevel >= 13 && playerLevel <= 16) {
          setProficiencyBonus("+5");
        } else if (playerLevel >= 17) {
          setProficiencyBonus("+6");
        }
        break;
      case "cleric":
        if (playerLevel >= 1 && playerLevel <= 4) {
          setProficiencyBonus("+2");
        } else if (playerLevel >= 5 && playerLevel <= 8) {
          setProficiencyBonus("+3");
        } else if (playerLevel >= 9 && playerLevel <= 12) {
          setProficiencyBonus("+4");
        } else if (playerLevel >= 13 && playerLevel <= 16) {
          setProficiencyBonus("+5");
        } else if (playerLevel >= 17) {
          setProficiencyBonus("+6");
        }
        break;
      case "druid":
        if (playerLevel >= 1 && playerLevel <= 4) {
          setProficiencyBonus("+2");
        } else if (playerLevel >= 5 && playerLevel <= 8) {
          setProficiencyBonus("+3");
        } else if (playerLevel >= 9 && playerLevel <= 12) {
          setProficiencyBonus("+4");
        } else if (playerLevel >= 13 && playerLevel <= 16) {
          setProficiencyBonus("+5");
        } else if (playerLevel >= 17) {
          setProficiencyBonus("+6");
        }
        break;
      case "fighter":
        if (playerLevel >= 1 && playerLevel <= 4) {
          setProficiencyBonus("+2");
        } else if (playerLevel >= 5 && playerLevel <= 8) {
          setProficiencyBonus("+3");
        } else if (playerLevel >= 9 && playerLevel <= 12) {
          setProficiencyBonus("+4");
        } else if (playerLevel >= 13 && playerLevel <= 16) {
          setProficiencyBonus("+5");
        } else if (playerLevel >= 17) {
          setProficiencyBonus("+6");
        }
        break;
      case "monk":
        if (playerLevel >= 1 && playerLevel <= 4) {
          setProficiencyBonus("+2");
        } else if (playerLevel >= 5 && playerLevel <= 8) {
          setProficiencyBonus("+3");
        } else if (playerLevel >= 9 && playerLevel <= 12) {
          setProficiencyBonus("+4");
        } else if (playerLevel >= 13 && playerLevel <= 16) {
          setProficiencyBonus("+5");
        } else if (playerLevel >= 17) {
          setProficiencyBonus("+6");
        }
        break;
      case "paladin":
        if (playerLevel >= 1 && playerLevel <= 4) {
          setProficiencyBonus("+2");
        } else if (playerLevel >= 5 && playerLevel <= 8) {
          setProficiencyBonus("+3");
        } else if (playerLevel >= 9 && playerLevel <= 12) {
          setProficiencyBonus("+4");
        } else if (playerLevel >= 13 && playerLevel <= 16) {
          setProficiencyBonus("+5");
        } else if (playerLevel >= 17) {
          setProficiencyBonus("+6");
        }
        break;
      case "ranger":
        if (playerLevel >= 1 && playerLevel <= 4) {
          setProficiencyBonus("+2");
        } else if (playerLevel >= 5 && playerLevel <= 8) {
          setProficiencyBonus("+3");
        } else if (playerLevel >= 9 && playerLevel <= 12) {
          setProficiencyBonus("+4");
        } else if (playerLevel >= 13 && playerLevel <= 16) {
          setProficiencyBonus("+5");
        } else if (playerLevel >= 17) {
          setProficiencyBonus("+6");
        }
        break;
      case "rogue":
        if (playerLevel >= 1 && playerLevel <= 4) {
          setProficiencyBonus("+2");
        } else if (playerLevel >= 5 && playerLevel <= 8) {
          setProficiencyBonus("+3");
        } else if (playerLevel >= 9 && playerLevel <= 12) {
          setProficiencyBonus("+4");
        } else if (playerLevel >= 13 && playerLevel <= 16) {
          setProficiencyBonus("+5");
        } else if (playerLevel >= 17) {
          setProficiencyBonus("+6");
        }
        break;
      case "sorcerer":
        if (playerLevel >= 1 && playerLevel <= 4) {
          setProficiencyBonus("+2");
        } else if (playerLevel >= 5 && playerLevel <= 8) {
          setProficiencyBonus("+3");
        } else if (playerLevel >= 9 && playerLevel <= 12) {
          setProficiencyBonus("+4");
        } else if (playerLevel >= 13 && playerLevel <= 16) {
          setProficiencyBonus("+5");
        } else if (playerLevel >= 17) {
          setProficiencyBonus("+6");
        }
        break;
      case "warlock":
        if (playerLevel >= 1 && playerLevel <= 4) {
          setProficiencyBonus("+2");
        } else if (playerLevel >= 5 && playerLevel <= 8) {
          setProficiencyBonus("+3");
        } else if (playerLevel >= 9 && playerLevel <= 12) {
          setProficiencyBonus("+4");
        } else if (playerLevel >= 13 && playerLevel <= 16) {
          setProficiencyBonus("+5");
        } else if (playerLevel >= 17) {
          setProficiencyBonus("+6");
        }
        break;
      case "wizard":
        if (playerLevel >= 1 && playerLevel <= 4) {
          setProficiencyBonus("+2");
        } else if (playerLevel >= 5 && playerLevel <= 8) {
          setProficiencyBonus("+3");
        } else if (playerLevel >= 9 && playerLevel <= 12) {
          setProficiencyBonus("+4");
        } else if (playerLevel >= 13 && playerLevel <= 16) {
          setProficiencyBonus("+5");
        } else if (playerLevel >= 17) {
          setProficiencyBonus("+6");
        }
        break;
      default:
        setProficiencyBonus("0");
        break;
    }
  }, [playerClass, playerLevel]);

  return (
    <>
      <section id="BONUS_PERCEPTION">
        <img className="joust" id="joustUp" src={joust} alt="joust" />
        <div className="BP" id="Proficiency_bonus">
          <input
            type="text"
            className="inputBP"
            id="inputPB"
            value={proficiencyBonus}
          />
          <div className="BP_container">
            <p className="BP_item"> Proficiency bonus</p>
          </div>
        </div>
        <div className="BP" id="Passive_perception">
          <div className="BP_container">
            <p className="BP_item"> Passive perception</p>
          </div>
          <input
            type="text"
            className="inputBP"
            id="inputPP"
            value={passivePerception}
          />
        </div>
        <div className="BP" id="inspiration">
          <input type="text" className="inputBP" id="inputInsp" value={0} />
          <div className="BP_container">
            <p className="BP_item"> Inspiration</p>
          </div>
        </div>
        <img className="joust" id="joustDn" src={joust} alt="joust" />
      </section>

      <section id="BONUS_PERCEPTION_DESKTOP">
        <div className="BPD_line1">
          <div className="BP" id="Proficiency_bonus">
            <input
              type="text"
              className="inputBP"
              id="inputPB"
              value={proficiencyBonus}
            />
            <div className="BP_container">
              <p className="BP_item"> Proficiency bonus</p>
            </div>
          </div>
          <div className="knife_position">
            <img className="knife_Ico" src={knife} alt="knife" />
          </div>
          <div className="BP" id="Passive_perception">
            <div className="BP_container">
              <p className="BP_item"> Passive perception</p>
            </div>
            <input
              type="text"
              className="inputBP"
              id="inputPP"
              value={passivePerception}
            />
          </div>
        </div>
        <div className="BPD_line2">
          <img
            src={Dragon}
            alt="Dragon"
            className="Dragon_ico"
            id="Dragon_left"
          />
          <div className="BP" id="inspiration">
            <input type="text" className="inputBP" id="inputInsp" value={0} />
            <div className="BP_container">
              <p className="BP_item"> Inspiration</p>
            </div>
          </div>
          <img
            src={Dragon}
            alt="Dragon"
            className="Dragon_ico"
            id="Dragon_right"
          />
        </div>
      </section>
    </>
  );
}

export default BonusPerceptionBloc;
