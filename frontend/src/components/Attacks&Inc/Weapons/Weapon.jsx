import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weapon.css";
import Arrowline2 from "../../../assets/dnd_ico/ArrowLine_1.png";
import useCharacter from "../../../context/CharacterContext";

function Weapon() {
  const { playerWeaponKnowledge } = useCharacter();
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
    let mounted = true;
    let currentPage = "https://api.open5e.com/v1/weapons/";

    const fetchData = async () => {
      try {
        const response = await axios.get(currentPage);
        if (mounted) {
          const weaponsData = response.data.results;
          const weaponNames = weaponsData.map((weapon) => weapon.name);
          setWeaponList((prevList) => [...prevList, ...weaponNames]);

          if (response.data.next) {
            currentPage = response.data.next;
            fetchData();
          }
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des armes depuis l'API :",
          error
        );
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mountedTwo = true;
    let currentPage = "https://api.open5e.com/v1/weapons/";

    const fetchData = async () => {
      try {
        const response = await axios.get(currentPage);
        if (mountedTwo) {
          const weaponsDataTwo = response.data.results;
          const weaponNamesTwo = weaponsDataTwo.map((weapon) => weapon.name);
          setWeaponListTwo((prevList) => [...prevList, ...weaponNamesTwo]);

          if (response.data.next) {
            currentPage = response.data.next;
            fetchData();
          }
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des armes depuis l'API :",
          error
        );
      }
    };
    fetchData();
    return () => {
      mountedTwo = false;
    };
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://www.dnd5eapi.co/api/equipment-categories/weapon")
  //     .then((response) => {
  //       const weaponsDataTwo = response.data.equipment;
  //       const weaponNamesTwo = weaponsDataTwo.map(
  //         (weaponTwo) => weaponTwo.name
  //       );
  //       setWeaponListTwo(weaponNamesTwo);
  //     })
  //     .catch((error) => {
  //       console.error(
  //         "Erreur lors de la récupération des armes depuis l'API :",
  //         error
  //       );
  //     });
  // }, []);
  useEffect(() => {
    let mountedRange = true;
    let currentPage = "https://api.open5e.com/v1/weapons/";

    const fetchData = async () => {
      try {
        const response = await axios.get(currentPage);
        if (mountedRange) {
          const rangeWeaponsData = response.data.results;
          const filteredRangeWeapons = rangeWeaponsData.filter((weapon) =>
            weapon.category.includes("Ranged")
          );
          const rangeWeaponNames = filteredRangeWeapons.map(
            (weapon) => weapon.name
          );
          setRangeWeaponList((prevList) => [...prevList, ...rangeWeaponNames]);

          if (response.data.next) {
            currentPage = response.data.next;
            fetchData();
          }
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des armes depuis l'API :",
          error
        );
      }
    };
    fetchData();
    return () => {
      mountedRange = false;
    };
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://www.dnd5eapi.co/api/equipment-categories/ranged-weapons")
  //     .then((response) => {
  //       const rangesWeaponsData = response.data.equipment;
  //       const rangesWeaponNames = rangesWeaponsData.map(
  //         (weapon) => weapon.name
  //       );
  //       setRangeWeaponList(rangesWeaponNames);
  //     })
  //     .catch((error) => {
  //       console.error(
  //         "Erreur lors de la récupération des armes depuis l'API :",
  //         error
  //       );
  //     });
  // }, []);

  function capitalizeFirstLetter(Abcde) {
    return Abcde.charAt(0).toUpperCase() + Abcde.slice(1).toLowerCase();
  }

  function OnMainWeaponChoice(e) {
    setNameMainWeapon(e.target.value);
    axios
      .get(
        `https://api.open5e.com/v1/weapons/${e.target.value
          .toLowerCase()
          .replace(/\s/g, "-")
          .replace(/,/g, "")}`
      )

      .then((response) => {
        const damagesData = response.data;
        const damageDices = damagesData.damage_dice;
        setMainWeaponBonus(damageDices);
        const damageTypes = damagesData.damage_type;
        console.info(damageTypes);
        const capitalDamageTypes = capitalizeFirstLetter(damageTypes);
        setMainWeaponDamageType(capitalDamageTypes);
      });
  }
  function OnOffHandWeaponChoice(e) {
    setNameOffHandWeapon(e.target.value);
    axios
      .get(
        `https://api.open5e.com/v1/weapons/${e.target.value
          .toLowerCase()
          .replace(/\s/g, "-")
          .replace(/,/g, "")}`
      )
      .then((response) => {
        const damagesDataSec = response.data;
        const damageDicesSec = damagesDataSec.damage_dice;
        setOffHandWeaponBonus(damageDicesSec);
        const damageTypesSec = damagesDataSec.damage_type;
        const capitalDamageTypesSec = capitalizeFirstLetter(damageTypesSec);
        setOffHandDamageType(capitalDamageTypesSec);
      });
  }
  function OnRangeWeaponChoice(e) {
    setNameRangeWeapon(e.target.value);
    axios
      .get(
        `https://api.open5e.com/v1/weapons/${e.target.value
          .toLowerCase()
          .replace(/\s/g, "-")
          .replace(/,/g, "")}`
      )
      .then((response) => {
        const damagesDataThird = response.data;
        const damageDicesThird = damagesDataThird.damage_dice;
        setRangeWeaponBonus(damageDicesThird);
        const damageTypesThird = damagesDataThird.damage_type;
        const capitalDamageTypesThird = capitalizeFirstLetter(damageTypesThird);
        setRangeWeaponType(capitalDamageTypesThird);
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
