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
            &diams; <span className="spell_item_bold">Range :{" "}</span><span className="spell_item_italic"> {range}</span>
          </p>
          {components && (
          <p className="spell_item_infos">
            &diams; <span className="spell_item_bold">Components :{" "}</span>
            <span className="spell_item_italic">
              {Array.isArray(components) && components.join(", ")}
            </span>
          </p>)}
          <p className="spell_item_infos">
            &diams; <span className="spell_item_bold">Casting time :{" "}</span>
            <span className="spell_item_italic">{castingTime}</span>
          </p>
          <p className="spell_item_infos">
            &diams; <span className="spell_item_bold">Duration :{" "}</span>
            <span className="spell_item_italic">{duration}</span>
          </p>
          {damage && (
            <p className="spell_item_infos">
              &diams; <span className="spell_item_bold">Damage :{" "}</span>
              <span className="spell_item_italic">{damage}</span>
            </p>
          )}
          {damageSlot && (
            <>
              <p className="spell_item_infos">
                &diams; <span className="spell_item_bold">Damage at characther level:{" "}</span>
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
                &diams; <span className="spell_item_bold">Damage at characther level:{" "}</span>
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
          <p className="spell_item_infos"><span className="spell_item_bold">Description :{" "}</span></p>
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
