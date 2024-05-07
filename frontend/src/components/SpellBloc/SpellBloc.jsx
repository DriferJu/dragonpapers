import React from "react";
import "./spellBloc.css";
import LevelSpellBloc from "./LevelSpellBloc";
import Wizard from "../../assets/dnd_ico/wizard.png";

function SpellBloc() {
  return (
    <section id="SPELLS">
      <div id="wizard_ico_">
        <img id="wizard_ico" src={Wizard} alt="wizard icone" />
      </div>
      <div className="spells_bloc">
        <h1 className="spells_bloc_title">SPELLS</h1>
        <div id="spell_area_screen">
          <LevelSpellBloc/>
        </div>
        <div id="spell_area_print"> </div>
        <div id="wizard_ico_print_">
          <img id="wizard_ico_print" src={Wizard} alt="wizard icone" />
        </div>
      </div>
    </section>
  );
}

export default SpellBloc;

