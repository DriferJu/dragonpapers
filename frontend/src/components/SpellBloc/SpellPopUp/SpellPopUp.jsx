import React from "react";
import MagicWand from "../../../assets/dnd_ico/baguette-magique.png";
import "./spellPopUp.css";

function SpellPopUp(props) {
  const {
    name,
    range,
    school,
    components,
    material,
    duration,
    castingTime,
    description,
    requiresConcentration,
    concentration,
    castAsRitual,
    ritual,
    highterLevel,
  } = props;

  return (
    <section id="spells_PopUp">
      <div className="spell_bloc_bkg">
        <div className="spell_pop_up_content">
          <h2 className="spell_item_title">{name}</h2>

          <img src={MagicWand} alt="Magic wand" className="MagicWand_ico" />
          <p className="spell_item_infos">
            &diams; <span className="spell_item_bold">Range : </span>
            <span className="spell_item_italic"> {range}</span>
          </p>
          {components && (
            <p className="spell_item_infos">
              &diams; <span className="spell_item_bold">Components : </span>
              <span className="spell_item_italic">{components}</span>
            </p>
          )}
          {material && (
          <p className="spell_item_infos">
            &diams; <span className="spell_item_bold">Material: </span>
            <span className="spell_item_italic">{material}</span>
          </p>)}
          <p className="spell_item_infos">
            &diams; <span className="spell_item_bold">Casting time : </span>
            <span className="spell_item_italic">{castingTime}</span>
          </p>
          <p className="spell_item_infos">
            &diams; <span className="spell_item_bold">Duration : </span>
            <span className="spell_item_italic">{duration}</span>
          </p>
          {requiresConcentration === true && (
            <p className="spell_item_infos">
              &diams; <span className="spell_item_bold">Concentration : </span>
              <span className="spell_item_italic">{concentration}</span>
            </p>
          )}
          {castAsRitual === true && (
            <p className="spell_item_infos">
              &diams; <span className="spell_item_bold">Ritual : </span>
              <span className="spell_item_italic">{ritual}</span>
            </p>
          )}
          <img src={MagicWand} alt="Magic wand" className="MagicWand_ico" />
          <p className="spell_item_infos">
            <span className="spell_item_bold">Description : </span>
          </p>
          <p className="spell_item_desc">{description}</p>
          {highterLevel && (
            <>
              <p className="spell_item_infos">
                <span className="spell_item_bold">Highter Level : </span>
              </p>
              <p className="spell_item_desc">{highterLevel}</p>
            </>
          )}
          <div id="MagicWand_ico_down">
            <img src={MagicWand} alt="Magic wand" className="MagicWand_ico" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpellPopUp;
