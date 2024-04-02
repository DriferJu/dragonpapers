import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weapon.css";
import Arrowline2 from "../../../assets/dnd_ico/ArrowLine_1.png";

function Weapon() {
  const [nameMainWeapon, setNameMainWeapon] = useState("");
  const [mainWeaponBonus, setMainWeaponBonus] = useState("");
  const [mainWeaponDamageType, setMainWeaponDamageType] = useState("");
  const [nameOffHandWeapon, setNameOffHandWeapon] = useState("");
  const [offHandWeaponBonus, setOffHandWeaponBonus] = useState("");
  const [offHandDamageType, setOffHandDamageType] = useState("");
  const [nameRangeWeapon, setNameRangeWeapon] = useState("");
  const [rangeWeaponBonus, setRangeWeaponBonus] = useState("");
  const [rangeWeaponType, setRangeWeaponType] = useState("");

  const [weaponList, setWeaponList] = useState([]);
  const [weaponListTwo, setWeaponListTwo] = useState([]);
  const [rangeWeaponList, setRangeWeaponList] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/equipment-categories/weapon")
      .then((response) => {
        const weaponsData = response.data.equipment;
        const weaponNames = weaponsData.map((weapon) => weapon.name);
        setWeaponList(weaponNames);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des armes depuis l'API :",
          error
        );
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/equipment-categories/weapon")
      .then((response) => {
        const weaponsDataTwo = response.data.equipment;
        const weaponNamesTwo = weaponsDataTwo.map(
          (weaponTwo) => weaponTwo.name
        );
        setWeaponListTwo(weaponNamesTwo);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des armes depuis l'API :",
          error
        );
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/equipment-categories/ranged-weapons")
      .then((response) => {
        const rangesWeaponsData = response.data.equipment;
        const rangesWeaponNames = rangesWeaponsData.map(
          (weapon) => weapon.name
        );
        setRangeWeaponList(rangesWeaponNames);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des armes depuis l'API :",
          error
        );
      });
  }, []);
  function OnMainWeaponChoice(e) {
    setNameMainWeapon(e.target.value);
    axios
      .get(
        `https://www.dnd5eapi.co/api/equipment/${e.target.value.toLowerCase()}`
      )
      .then((response) => {
        const damagesData = response.data.damage;
        const damageDices = damagesData.damage_dice;
        setMainWeaponBonus(damageDices);
        const damageTypes = damagesData.damage_type.name;
        setMainWeaponDamageType(damageTypes);
      });
  }
  function OnOffHandWeaponChoice(e) {
    setNameOffHandWeapon(e.target.value);
    axios
      .get(
        `https://www.dnd5eapi.co/api/equipment/${e.target.value.toLowerCase()}`
      )
      .then((response) => {
        const damagesDataSec = response.data.damage;
        const damageDicesSec = damagesDataSec.damage_dice;
        setOffHandWeaponBonus(damageDicesSec);
        const damageTypesSec = damagesDataSec.damage_type.name;
        setOffHandDamageType(damageTypesSec);
      });
  }
  function OnRangeWeaponChoice(e) {
    setNameRangeWeapon(e.target.value);
    axios
      .get(
        `https://www.dnd5eapi.co/api/equipment/${e.target.value.toLowerCase()}`
      )
      .then((response) => {
        const damagesDataThird = response.data.damage;
        const damageDicesThird = damagesDataThird.damage_dice;
        setRangeWeaponBonus(damageDicesThird);
        const damageTypesThird = damagesDataThird.damage_type.name;
        setRangeWeaponType(damageTypesThird);
      });
  }
  return (
    <div className="weapons">
      <div className="weapon_fr">
        <div className="weapon_name_input">
          <h1 className="weapon_name_heading">Name</h1>
          <select
            className="name_input"
            value={nameMainWeapon}
            onChange={OnMainWeaponChoice}
          >
            <option value="">Select a Main Weapon...</option>
            {weaponList.map((weaponName) => (
              <option key={weaponName} value={weaponName}>
                {weaponName}
              </option>
            ))}
          </select>
        </div>

        <div className="bonus_combat">
          <div className="div_bonus">
            <h1 className="weapon_sub_heading">ATK Bonus</h1>
            <input
              className="bonus_input"
              type="text"
              value={mainWeaponBonus}
              onChange={(e) => setMainWeaponBonus(e.target.value)}
            />
          </div>
          <div className="div_combat">
            <h1 className="weapon_sub_heading">Combat/ Type</h1>
            <input
              className="combat_input"
              type="text"
              value={mainWeaponDamageType}
              onChange={(e) => setMainWeaponDamageType(e.target.value)}
            />
          </div>
        </div>
      </div>

      <img className="arrowline" src={Arrowline2} alt="" />

      <div className="weapon_sec">
        <div className="weapon_name_input">
          <h1 className="weapon_name_heading title_print">Name</h1>
          <select
            className="name_input"
            value={nameOffHandWeapon}
            onChange={OnOffHandWeaponChoice}
          >
            <option value="">Select an Offhand Weapon...</option>
            {weaponListTwo.map((weaponNameTwo) => (
              <option key={weaponNameTwo} value={weaponNameTwo}>
                {weaponNameTwo}
              </option>
            ))}
          </select>
        </div>

        <div className="bonus_combat">
          <div className="div_bonus">
            <h1 className="weapon_sub_heading title_print">ATK Bonus</h1>
            <input
              className="bonus_input"
              type="text"
              value={offHandWeaponBonus}
              onChange={(e) => setOffHandWeaponBonus(e.target.value)}
            />
          </div>
          <div className="div_combat">
            <h1 className="weapon_sub_heading title_print">Combat/ Type</h1>
            <input
              className="combat_input"
              type="text"
              value={offHandDamageType}
              onChange={(e) => setOffHandDamageType(e.target.value)}
            />
          </div>
        </div>
      </div>

      <img className="arrowline" src={Arrowline2} alt="" />

      <div className="weapon_third">
        <div className="weapon_name_input">
          <h1 className="weapon_name_heading title_print">Name</h1>
          <select
            className="name_input"
            value={nameRangeWeapon}
            onChange={OnRangeWeaponChoice}
          >
            <option value="">Select a Range Weapon...</option>
            {rangeWeaponList.map((rangesWeaponName) => (
              <option key={rangesWeaponName} value={rangesWeaponName}>
                {rangesWeaponName}
              </option>
            ))}
          </select>
        </div>

        <div className="bonus_combat">
          <div className="div_bonus">
            <h1 className="weapon_sub_heading title_print">ATK Bonus</h1>
            <input
              className="bonus_input"
              type="text"
              value={rangeWeaponBonus}
              onChange={(e) => setRangeWeaponBonus(e.target.value)}
            />
          </div>
          <div className="div_combat">
            <h1 className="weapon_sub_heading title_print">Combat/ Type</h1>
            <input
              className="combat_input"
              type="text"
              value={rangeWeaponType}
              onChange={(e) => setRangeWeaponType(e.target.value)}
            />
          </div>
        </div>
      </div>

      <img className="arrowline" src={Arrowline2} alt="" />
    </div>
  );
}
export default Weapon;
