import React, { useState, useEffect } from "react";
import { Modal, Box } from "@mui/material";
import axios from "axios";
import "./spellBloc.css";
import SpellPopUp from "./SpellPopUp/SpellPopUp";
import LittleArrow from "../../assets/dnd_ico/fleches.png";
import SwordCross from "../../assets/dnd_ico/epees.png";
import PlusSymbol from "../../assets/dnd_ico/plus.png";

function LevelSpellBloc(props) {
  const { title, id } = props;
  const [isSpellName, setIsSpellName] = useState("");
  const [isSpellRange, setIsSpellRange] = useState("");
  const [isSpellComponents, setIsSpellComponents] = useState("");
  const [isSpellDuration, setIsSpellDuration] = useState("");
  const [isSpellCastingTime, setIsSpellCastingTime] = useState("");
  const [isSpellDescription, setIsSpellDescription] = useState("");
  const [isSpellDamage, setIsSpellDamage] = useState("");
  const [isSpellDamageSlotLevel, setIsSpellDamageSlotLevel] = useState("");
  const [isSpellDamagecharacterLevel, setisSpellDamagecharacterLevel] =
    useState("");

  //   gestion API
  const [spells0, setSpells0] = useState([]);
  const [spells1, setSpells1] = useState([]);
  const [spells2, setSpells2] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/spells?level=0")
      .then((response) => setSpells0(response.data.results))
      .catch((error) => console.error("error fetching Spells Level 0", error));
  }, []);

  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/spells?level=1")
      .then((response) => setSpells1(response.data.results))
      .catch((error) => console.error("error fetching Spells Level 0", error));
  }, []);

  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/spells?level=2")
      .then((response) => setSpells2(response.data.results))
      .catch((error) => console.error("error fetching Spells Level 0", error));
  }, []);

  //   gestion Subb API
  function onSpellChoice(e) {
    const spellUrl = `https://www.dnd5eapi.co/api/spells/${e.target.value.replace(
      / /g,
      "-"
    )}`;

    axios
      .get(spellUrl)
      .then((response) => {
        const spellData = response.data;
        const spellName = spellData.name;
        setIsSpellName(spellName);
        const spellRange = spellData.range;
        setIsSpellRange(spellRange);
        const spellComponents = spellData.components;
        setIsSpellComponents(spellComponents);
        const spellCastingTime = spellData.casting_time;
        setIsSpellCastingTime(spellCastingTime);
        const spellDuration = spellData.duration;
        setIsSpellDuration(spellDuration);
        const spellDescription = spellData.desc;
        setIsSpellDescription(spellDescription);
        const spellDamage = spellData.damage.damage_type.name;
        setIsSpellDamage(spellDamage);
        const spellDamageSlotLevel = spellData.damage.damage_at_slot_level;
        setIsSpellDamageSlotLevel(spellDamageSlotLevel);
        const spellDamagecharacterLevel =
          spellData.damage.damage_at_character_level;
        setisSpellDamagecharacterLevel(spellDamagecharacterLevel);
      })
      .catch((error) => {
        console.error("Error fetching spell details:", error);
      });
  }

  // gestion toggle
  const [isSpellListVisible, setSpellListVisible] = useState(false);
  const toggleSpellList = () => {
    setSpellListVisible(!isSpellListVisible);
  };

  // gestion Pop Up
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div id={id} className="spells_lvls">
        <div className="spell_bloc_top_line">
          <h2 className="spell_lvl_title">{title} </h2>

          {/* arrow for toggle */}
          {!isSpellListVisible && (
            <img
              className="arrow_btn_open"
              src={LittleArrow}
              alt="arrow toggle button open"
              onClick={toggleSpellList}
            />
          )}
          {isSpellListVisible && (
            <img
              className="arrow_btn_closed"
              src={LittleArrow}
              alt="arrow toggle button closed"
              onClick={toggleSpellList}
            />
          )}
        </div>

        {/* Spells Lists by level */}
        {title === "SPELLS - LVL 0" && isSpellListVisible && (
          <>
            <div className="spells_list">
              <label htmlFor="Spells_Level_0"> </label>
              <select
                name="spell0"
                className="spell_item"
                onChange={onSpellChoice}
              >
                <option value="">select a spell level 0</option>
                {spells0.map((spell) => (
                  <option key={spell.index} value={spell.index}>
                    {spell.name}
                  </option>
                ))}
              </select>
              <img
                src={PlusSymbol}
                alt="en savoir +"
                onClick={openModal}
                className="open_spell_popup"
              />
            </div>
            <div className="spells_list">
              <label htmlFor="Spells_Level_0"> </label>
              <select
                name="spell0"
                className="spell_item"
                onChange={onSpellChoice}
              >
                <option value="">select a spell level 0</option>
                {spells0.map((spell) => (
                  <option key={spell.index} value={spell.index}>
                    {spell.name}
                  </option>
                ))}
              </select>
              <img
                src={PlusSymbol}
                alt="en savoir +"
                onClick={openModal}
                className="open_spell_popup"
              />
            </div>
            <div className="spells_list">
              <label htmlFor="Spells_Level_0"> </label>
              <select
                name="spell0"
                className="spell_item"
                onChange={onSpellChoice}
              >
                <option value="">select a spell level 0</option>
                {spells0.map((spell) => (
                  <option key={spell.index} value={spell.index}>
                    {spell.name}
                  </option>
                ))}
              </select>
              <img
                src={PlusSymbol}
                alt="en savoir +"
                onClick={openModal}
                className="open_spell_popup"
              />
            </div>
          </>
        )}

        {title === "SPELLS - LVL 1" && isSpellListVisible && (
          <>
            <div className="spells_list">
              <label htmlFor="Spells_Level_1"> </label>
              <select
                name="spell1"
                className="spell_item"
                onChange={onSpellChoice}
              >
                <option value="">select a spell level 1</option>
                {spells1.map((spell) => (
                  <option key={spell.index} value={spell.index}>
                    {spell.name}
                  </option>
                ))}
              </select>
              <img
                src={PlusSymbol}
                alt="en savoir +"
                onClick={openModal}
                className="open_spell_popup"
              />
            </div>
            <div className="spells_list">
              <label htmlFor="Spells_Level_1"> </label>
              <select
                name="spell1"
                className="spell_item"
                onChange={onSpellChoice}
              >
                <option value="">select a spell level 1</option>
                {spells1.map((spell) => (
                  <option key={spell.index} value={spell.index}>
                    {spell.name}
                  </option>
                ))}
              </select>
              <img
                src={PlusSymbol}
                alt="en savoir +"
                onClick={openModal}
                className="open_spell_popup"
              />
            </div>
          </>
        )}

        {title === "SPELLS - LVL 2" && isSpellListVisible && (
          <div className="spells_list">
            <label htmlFor="Spells_Level_2"> </label>
            <select
              name="spell2"
              className="spell_item"
              onChange={onSpellChoice}
            >
              <option value="">select a spell level 2</option>
              {spells2.map((spell) => (
                <option key={spell.index} value={spell.index}>
                  {spell.name}
                </option>
              ))}
            </select>
            <img
              src={PlusSymbol}
              alt="en savoir +"
              onClick={openModal}
              className="open_spell_popup"
            />
          </div>
        )}
      </div>

      {modalIsOpen ? (
        <Modal open={modalIsOpen} onClose={closeModal} className="spell_popup">
          <Box>
            <div className="closed_cross">
              <img
                className="sword_cross"
                src={SwordCross}
                alt="-"
                onClick={closeModal}
              />
            </div>
            <SpellPopUp
              name={isSpellName}
              range={isSpellRange}
              components={isSpellComponents}
              duration={isSpellDuration}
              castingTime={isSpellCastingTime}
              description={isSpellDescription}
              damage={isSpellDamage}
              damageSlot={isSpellDamageSlotLevel}
              damagecharacLevel={isSpellDamagecharacterLevel}
            />
          </Box>
        </Modal>
      ) : null}
    </>
  );
}

export default LevelSpellBloc;
