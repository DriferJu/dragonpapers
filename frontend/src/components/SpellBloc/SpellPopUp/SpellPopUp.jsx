import React from "react";
import MagicWand from "../../../assets/dnd_ico/baguette-magique.png";
import "./spellPopUp.css";

function SpellPopUp(props) {
  const {
    name,
    range,
    components,
    duration,
    castingTime,
    description,
    damage,
    damageSlot,
    damagecharacLevel,
  } = props;

  return (
    <section id="spells_PopUp">
      <div className="spell_bloc_bkg">
        <div className="spell_pop_up_content">
          <h2 className="spell_item_title">{name}</h2>
          <img src={MagicWand} alt="Magic wand" className="MagicWand_ico" />
          <p className="spell_item_infos">
            &diams; Range :<span className="spell_item_italic"> {range}</span>
          </p>
          <p className="spell_item_infos">
            &diams; Components :{" "}
            <span className="spell_item_italic">
              {" "}
              {components && components.join(", ")}
            </span>
          </p>
          <p className="spell_item_infos">
            &diams; Casting time :{" "}
            <span className="spell_item_italic">{castingTime}</span>
          </p>
          <p className="spell_item_infos">
            &diams; Duration :{" "}
            <span className="spell_item_italic">{duration}</span>
          </p>
          {damage && (
            <p className="spell_item_infos">
              &diams; Damage :{" "}
              <span className="spell_item_italic">{damage}</span>
            </p>
          )}
          {damageSlot && (
            <>
              <p className="spell_item_infos">
                &diams; Damage at characther level:
              </p>
              {Object.keys(damageSlot).map((key) => {
                return (
                  <p key={key} className="spell_item_infos item_infos_damage">
                    &bull; lvl {key} = {damageSlot[key]}
                  </p>
                );
              })}
            </>
          )}
          {damagecharacLevel && (
            <>
              <p className="spell_item_infos">
                &diams; Damage at characther level:
              </p>
              {Object.keys(damagecharacLevel).map((key) => {
                return (
                  <p key={key} className="spell_item_infos item_infos_damage">
                    &bull; lvl {key} = {damagecharacLevel[key]}
                  </p>
                );
              })}
            </>
          )}
          <img src={MagicWand} alt="Magic wand" className="MagicWand_ico" />
          <p className="spell_item_infos">Description :</p>
          <p className="spell_item_desc">{description}</p>
          <div id="MagicWand_ico_down">
            <img src={MagicWand} alt="Magic wand" className="MagicWand_ico" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpellPopUp;
