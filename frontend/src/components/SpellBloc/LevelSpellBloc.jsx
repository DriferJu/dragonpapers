import React, { useState, useEffect, useRef } from "react";
import { Modal, Box } from "@mui/material";
import axios from "axios";
import "./spellBloc.css";
import SpellPopUp from "./SpellPopUp/SpellPopUp";
import SwordCross from "../../assets/dnd_ico/epees.png";
import PlusSymbol from "../../assets/dnd_ico/plus.png";
import useCharacter from "../../context/CharacterContext";
import spellSlots from "./spellSlots";

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
  const [spells, setSpells] = useState({});
  const [palSpellsData, setPalSpellsData] = useState([]);
  const [paladinSpells, setPaladinSpells] = useState([]);
  const { playerClass, playerLevel } = useCharacter();
  console.info(spells);

  const spellSlotsByLevel = spellSlots[playerClass]?.[playerLevel];

  // API spells list
  useEffect(() => {
    if (playerClass && playerClass !== "paladin") {
      const promises = [];
      for (let i = 0; i <= 9; i++) {
        let url = `https://api.open5e.com/v1/spells/?slug__in=&slug__iexact=&slug=&name__iexact=&name=&spell_level=${i}&spell_level__range=&spell_level__gt=&spell_level__gte=&spell_level__lt=&spell_level__lte=&target_range_sort=&target_range_sort__range=&target_range_sort__gt=&target_range_sort__gte=&target_range_sort__lt=&target_range_sort__lte=&school__iexact=&school=&school__in=&duration__iexact=&duration=&duration__in=&requires_concentration=unknown&requires_verbal_components=unknown&requires_somatic_components=unknown&requires_material_components=unknown&casting_time__iexact=&casting_time=&casting_time__in=&dnd_class__iexact=&dnd_class=&dnd_class__in=&dnd_class__icontains=&spell_lists=${playerClass}&document__slug__iexact=&document__slug=&document__slug__in=&document__slug__not_in=&level_int=&concentration=&components=&spell_lists_not=`;
        promises.push(axios.get(url));
      }
      Promise.all(promises)
        .then((responses) => {
          const spellsByLevel = {};
          responses.forEach((response, index) => {
            spellsByLevel[index] = response.data.results;
          });
          setSpells(spellsByLevel);
        })
        .catch((error) => console.error("error fetching Spells", error));
    }
  }, [playerClass]);

  // API Paladin Spells list
  useEffect(() => {
    let mounted = true;
    let currentPage = "https://api.open5e.com/v1/spells/?search=paladin";

    const fetchData = async () => {
      try {
        const response = await axios.get(currentPage);
        if (mounted) {
          const SpellData = response.data.results;
          const SpellDatas = SpellData.map((dataSpells) => dataSpells);
          setPalSpellsData((prevList) => [...prevList, ...SpellDatas]);

          if (response.data.next) {
            currentPage = response.data.next;
            fetchData();
          }
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des paladin' spells depuis l'API :",
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
    const spellsByLevel = {};
    for (let i = 0; i <= 4; i++) {
      const level = i + 1;
      const levelSpells = palSpellsData.filter(
        (spell) => spell.spell_level === level
      );
      spellsByLevel[level] = levelSpells;
    }
    setPaladinSpells(spellsByLevel);
  }, [palSpellsData]);

  // API spells detail
  function onSpellChoice(e) {
    const spellUrl = `https://api.open5e.com/v1/spells/${e.target.value}`;
    console.info("spellUrl:", spellUrl)

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
      {playerClass !== "paladin" && (
        <div className="spells_lvls">
          {Object.entries(spellSlotsByLevel || {}).map(
            ([spellLevel, numberOfSpells]) => (
              <React.Fragment key={spellLevel}>
                <h3 className="spell_lvl_subtitle">Level {spellLevel}</h3>
                <div className="spells_list">
                  <label htmlFor={`Spells_Level_${spellLevel}`}> </label>
                  <select
                    name={`spell${spellLevel}`}
                    className="spell_item"
                    onChange={(e) => onSpellChoice(e)}
                  >
                    <option value="">select a spell level {spellLevel}</option>
                    {spells[spellLevel]?.map((spell) => (
                      <option key={spell.index} value={spell.slug}>
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
                {Array.from({ length: numberOfSpells - 1 }, (_, i) => (
                  <div className="spells_list" key={i}>
                    <label htmlFor={`Spells_Level_${spellLevel}`}> </label>
                    <select
                      name={`spell${spellLevel}`}
                      className="spell_item"
                      onChange={(e) => onSpellChoice(e)}
                    >
                      <option value="">
                        select a spell level {spellLevel}
                      </option>
                      {spells[spellLevel]?.map((spell) => (
                        <option key={spell.index} value={spell.slug}>
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
                ))}
              </React.Fragment>
            )
          )}
        </div>
      )}
      {playerClass === "paladin" && (
        <div className="spells_lvls">
          {Object.entries(spellSlotsByLevel || {}).map(
            ([spellLevel, numberOfSpells]) => (
              <React.Fragment key={spellLevel}>
                <h3 className="spell_lvl_subtitle">Level {spellLevel}</h3>
                <div className="spells_list">
                  <label htmlFor={`Spells_Level_${spellLevel}`}> </label>
                  <select
                    name={`spell${spellLevel}`}
                    className="spell_item"
                    onChange={onSpellChoice}
                  >
                    <option value="">select a spell level {spellLevel}</option>
                    {paladinSpells[spellLevel]?.map((spell) => (
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
                {Array.from({ length: numberOfSpells - 1 }, (_, i) => (
                  <div className="spells_list" key={i}>
                    <label htmlFor={`Spells_Level_${spellLevel}`}> </label>
                    <select
                      name={`spell${spellLevel}`}
                      className="spell_item"
                      onChange={onSpellChoice}
                    >
                      <option value="">
                        select a spell level {spellLevel}
                      </option>
                      {paladinSpells[spellLevel]?.map((spell) => (
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
                ))}
              </React.Fragment>
            )
          )}
        </div>
      )}

      {modalIsOpen ? (
        <Modal open={modalIsOpen} onClose={closeModal} className="spell_popup">
          <Box>
            <div className="closed_cross">
              <img
                className="sword_cross"
                src={SwordCross}
                alt="close"
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
