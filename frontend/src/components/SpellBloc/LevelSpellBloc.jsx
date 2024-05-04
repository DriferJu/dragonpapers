import React, { useState, useEffect } from "react";
import { Modal, Box } from "@mui/material";
import axios from "axios";
import "./spellBloc.css";
import SpellPopUp from "./SpellPopUp/SpellPopUp";
import LittleArrow from "../../assets/dnd_ico/fleches.png";
import SwordCross from "../../assets/dnd_ico/epees.png";
import PlusSymbol from "../../assets/dnd_ico/plus.png";
import useCharacter from "../../context/CharacterContext";

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
  const { playerClass } = useCharacter();


  //   gestion API
  const [spells0, setSpells0] = useState([]);
  const [spells1, setSpells1] = useState([]);
  const [spells2, setSpells2] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.open5e.com/v1/spells/?slug__in=&slug__iexact=&slug=&name__iexact=&name=&spell_level=0&spell_level__range=&spell_level__gt=&spell_level__gte=&spell_level__lt=&spell_level__lte=&target_range_sort=&target_range_sort__range=&target_range_sort__gt=&target_range_sort__gte=&target_range_sort__lt=&target_range_sort__lte=&school__iexact=&school=&school__in=&duration__iexact=&duration=&duration__in=&requires_concentration=unknown&requires_verbal_components=unknown&requires_somatic_components=unknown&requires_material_components=unknown&casting_time__iexact=&casting_time=&casting_time__in=&dnd_class__iexact=&dnd_class=&dnd_class__in=&dnd_class__icontains=&document__slug__iexact=&document__slug=&document__slug__in=&document__slug__not_in=a5e&level_int=&concentration=&components=&spell_lists_not="
      )
      .then((response) => setSpells0(response.data.results))
      .catch((error) => console.error("error fetching Spells Level 0", error));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.open5e.com/v1/spells/?slug__in=&slug__iexact=&slug=&name__iexact=&name=&spell_level=1&spell_level__range=&spell_level__gt=&spell_level__gte=&spell_level__lt=&spell_level__lte=&target_range_sort=&target_range_sort__range=&target_range_sort__gt=&target_range_sort__gte=&target_range_sort__lt=&target_range_sort__lte=&school__iexact=&school=&school__in=&duration__iexact=&duration=&duration__in=&requires_concentration=unknown&requires_verbal_components=unknown&requires_somatic_components=unknown&requires_material_components=unknown&casting_time__iexact=&casting_time=&casting_time__in=&dnd_class__iexact=&dnd_class=&dnd_class__in=&dnd_class__icontains=&document__slug__iexact=&document__slug=&document__slug__in=&document__slug__not_in=a5e&level_int=&concentration=&components=&spell_lists_not="
      )
      .then((response) => setSpells1(response.data.results))
      .catch((error) => console.error("error fetching Spells Level 1", error));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.open5e.com/v1/spells/?slug__in=&slug__iexact=&slug=&name__iexact=&name=&spell_level=2&spell_level__range=&spell_level__gt=&spell_level__gte=&spell_level__lt=&spell_level__lte=&target_range_sort=&target_range_sort__range=&target_range_sort__gt=&target_range_sort__gte=&target_range_sort__lt=&target_range_sort__lte=&school__iexact=&school=&school__in=&duration__iexact=&duration=&duration__in=&requires_concentration=unknown&requires_verbal_components=unknown&requires_somatic_components=unknown&requires_material_components=unknown&casting_time__iexact=&casting_time=&casting_time__in=&dnd_class__iexact=&dnd_class=&dnd_class__in=&dnd_class__icontains=&document__slug__iexact=&document__slug=&document__slug__in=&document__slug__not_in=a5e&level_int=&concentration=&components=&spell_lists_not="
      )
      .then((response) => setSpells2(response.data.results))
      .catch((error) => console.error("error fetching Spells Level 2", error));
  }, []);

  function onSpellChoice(e) {
    const spellUrl = `https://api.open5e.com/v1/spells/${e.target.value
      .toLowerCase()
      .replace(/ /g, "-")}`;

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
    if (isSpellName) {
      setModalIsOpen(true);
    }
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
