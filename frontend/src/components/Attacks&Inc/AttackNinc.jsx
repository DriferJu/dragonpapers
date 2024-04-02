import Armor from "./Armors/Armor";
import Weapon from "./Weapons/Weapon";
import "./attackninc.css";
import sword from "../../assets/dnd_ico/sword.png";
import Arrowline2 from "../../assets/dnd_ico/ArrowLine_1.png";

function AttackNinc() {
  return (
    <section id="WEAPONS">
      <img className="imgesword" src={sword} alt="" />
      <div className="attackNinc">
        <h1 className="heading"> Attacks & Incantations</h1>
        <img className="arrow_line" src={Arrowline2} alt="" />
        <div className="weapon_armor">
          <Weapon />
          <Armor />
        </div>
      </div>
    </section>
  );
}
export default AttackNinc;
