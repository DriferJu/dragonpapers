import React, { useState, useEffect } from "react";
import axios from "axios";
import "./armor.css";
import fleche from "../../../assets/dnd_ico/fleches.png";

function Armor() {
  const [armorName, setArmorName] = useState("");
  const [armorclass, setArmorclass] = useState("");
  const [armorBonus, setArmorBonus] = useState("");
  const [disadvantage, setDisadvantage] = useState("");
  const [armorIsOpen, setArmorIsOpen] = useState(false);

  const [armorList, setArmorList] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.open5e.com/v1/armor/")
      .then((response) => {
        const armorData = response.data.results;
        const armorNames = armorData.map((armor) => armor.name);
        setArmorList(armorNames);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des armes depuis l'API :",
          error
        );
      });
  }, []);
  function OnArmorChoice(e) {
    setArmorName(e.target.value);
    axios
      .get(
        `https://api.open5e.com/v1/armor/${e.target.value
          .replace(/ /g, "-")
          .replace(/\(|\)/g, '')
          .toLowerCase()}`
      )
      .then((response) => {
        const armorDataChoice = response.data;
        const armorStat = armorDataChoice.base_ac;
        setArmorclass(armorStat);
        const armorDext = armorDataChoice.plus_dex_mod ? 'Dext' : undefined;
        const armorCon = armorDataChoice.plus_con_mod ? 'Const' : undefined;
        const amorWis = armorDataChoice.plus_wis_mod ? 'Wisd' : undefined;
  
        const bonuses = [armorDext, armorCon, amorWis].filter(Boolean);
        let bonusString;
        if (bonuses.length === 0) {
          bonusString = 'None';
        } else if (bonuses.length === 1) {
          bonusString = bonuses[0];
        } else if (bonuses.length === 2) {
          bonusString = bonuses.join(' + ');
        } else {
          const lastBonus = bonuses.pop();
          bonusString = bonuses.join(' + ') + ' + ' + lastBonus;
        }
        setArmorBonus(bonusString);
  
        const armorFlatMod = armorDataChoice.plus_flat_mod > 0 ? armorDataChoice.plus_flat_mod : undefined;
  
        const armorStealthDisadvantage = armorDataChoice.stealth_disadvantage ? 'Stealth' : 'None';;
        setDisadvantage(armorStealthDisadvantage);
      });
  }
  
  const toggleArmor = () => {
    setArmorIsOpen(!armorIsOpen);
  };

  return (
    <>
      <div className="armor">
        <div className="armor_bloc_top">
          <h1 className="armor_heading">Armor</h1>
          {armorIsOpen && (
            <img
              className="fleche_closed"
              src={fleche}
              alt="Arrow_closed"
              onClick={toggleArmor}
            />
          )}
          {!armorIsOpen && (
            <img
              className="fleche_open"
              src={fleche}
              alt="Arrow_open"
              onClick={toggleArmor}
            />
          )}
        </div>
        {armorIsOpen && (
          <div className="armor_bloc_contents">
            <div>
              <div className="armor_name">
                {/* <input
                  className="armor_name_input"
                  type="text"
                  id="armor_name_input"
                  placeholder="None"
                  value={name}
                  onChange={(e) => setArmorName(e.target.value)}
                /> */}
                <select
                  className="armor_name_input"
                  id="armor_name_input"
                  value={armorName}
                  onChange={OnArmorChoice}
                >
                  <option value="">Select an Armor...</option>
                  {armorList.map((armor) => (
                    <option key={armor} value={armor}>
                      {armor}
                    </option>
                  ))}
                </select>
              </div>

              <div className="class_strenght_line">
                <div className="armor_class">
                  <h1 className="armor_sub_heading">AC</h1>
                  <input
                    className="armor_class_input"
                    type="text"
                    id="armor_class_input"
                    placeholder="None"
                    value={armorclass}
                    onChange={(e) => setArmorclass(e.target.value)}
                  />
                </div>

                <div className="armor_strenght">
                  <h1 className="armor_sub_heading">Bonus</h1>
                  <input
                    className="armor_strenght_input"
                    type="text"
                    id="armor_strenght_input"
                    placeholder="None"
                    value={armorBonus}
                    onChange={(e) => setArmorBonus(e.target.value)}
                  />
                </div>
              </div>
              <div className="armor_disadvantages">
                <h1 className="armor_sub_heading">Disadvantages</h1>
                <input
                  className="armor_disadvantage_input"
                  type="text"
                  id="armor_disadvantage_input"
                  placeholder="None"
                  value={disadvantage}
                  onChange={(e) => setDisadvantage(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="armor_desktop">
        <div className="armor_bloc_top_desktop">
          <h1 className="armor_heading">Armor</h1>
          <div className="armor_bloc_contents_desktop">
            <div>
              <div className="armor_Line1">
                <div className="armor_name_desktop">
                  <select
                    className="armor_name_input"
                    id="armor_name_input"
                    value={armorName}
                    onChange={OnArmorChoice}
                  >
                    <option value="">Select an Armor...</option>
                    {armorList.map((armor) => (
                      <option key={armor} value={armor}>
                        {armor}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="armor_class_desktop">
                  <h1 className="armor_sub_heading">AC</h1>
                  <input
                    className="armor_class_input_desktop"
                    type="text"
                    id="armor_class_input"
                    placeholder="None"
                    value={armorclass}
                    onChange={(e) => setArmorclass(e.target.value)}
                  />
                </div>
              </div>

              <div className="armor_Line2">
                <div className="armor_disadvantages_desktop">
                  <h1 className="armor_sub_heading">Disadvantages</h1>
                  <input
                    className="armor_disadvantage_input_desktop"
                    type="text"
                    id="armor_disadvantage_input"
                    placeholder="None"
                    value={disadvantage}
                    onChange={(e) => setDisadvantage(e.target.value)}
                  />
                </div>

                <div className="armor_strenght_desktop">
                  <h1 className="armor_sub_heading">Bonus</h1>
                  <input
                    className="armor_strenght_input_desktop"
                    type="text"
                    id="armor_strenght_input"
                    placeholder="None"
                    value={armorBonus}
                    onChange={(e) => setArmorBonus(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="armor_print">
        <div className="armor_bloc_one">
          <h1 className="armor_heading">Armor</h1>
          <div id="armor_info_content">
            <div className="armor_name">
              <select
                className="armor_name_input"
                id="armor_name_input"
                value={armorName}
                onChange={OnArmorChoice}
              >
                <option value="">Select an Armor...</option>
                {armorList.map((armor) => (
                  <option key={armor} value={armor}>
                    {armor}
                  </option>
                ))}
              </select>
            </div>

            <div className="armor_class">
              <h1 className="armor_sub_heading">AC</h1>
              <input
                className="armor_class_input"
                type="text"
                id="armor_class_input"
                placeholder="None"
                value={armorclass}
                onChange={(e) => setArmorclass(e.target.value)}
              />
            </div>
          </div>
          <div className="armor_bloc_sec">
            <div className="armor_strenght">
              <h1 className="armor_sub_heading">Bonus</h1>
              <input
                className="armor_strenght_input"
                type="text"
                id="armor_strenght_input"
                placeholder="None"
                value={armorBonus}
                onChange={(e) => setArmorBonus(e.target.value)}
              />
            </div>

            <div className="armor_disadvantages">
              <h1 className="armor_sub_heading">Disadvantages</h1>
              <input
                className="armor_disadvantage_input"
                type="text"
                id="armor_disadvantage_input"
                placeholder="None"
                value={disadvantage}
                onChange={(e) => setDisadvantage(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Armor;
