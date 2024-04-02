import { useState, useEffect } from "react";
import "./Combat.css";
import initImg from "../../assets/dnd_ico/star.png";
import acImg from "../../assets/dnd_ico/bouclier.png";
import speedImg from "../../assets/dnd_ico/botte-magique.png";
import hpImg from "../../assets/dnd_ico/red_heart.png";
import knightImg from "../../assets/dnd_ico/chevalier.png";
import skullImg from "../../assets/dnd_ico/skull.png";
import deathImg from "../../assets/dnd_ico/tombal.png";
import HealthDice from "./HealthDice";
import DeathSave from "./DeathSave";
import useCharacter from "../../context/CharacterContext";

function Combat() {
  // const [initStat, setInitStat] = useState(0);
  const [acStat, setAcStat] = useState(10);
  const [speedStat, setSpeedStat] = useState(30);
  const [hpStat, setHpStat] = useState(1);
  const [success1, setSuccess1] = useState(false);
  const [success2, setSuccess2] = useState(false);
  const [success3, setSuccess3] = useState(false);
  const [fail1, setFail1] = useState(false);
  const [fail2, setFail2] = useState(false);
  const [fail3, setFail3] = useState(false);

  const { playerRace, caracs } = useCharacter();

  const isMobile = window.innerWidth < 1024;
  const isAlive = hpStat > 0;

  const dexterityCarac = caracs.find((carac) => carac.caracName === "DEX");
  const dexterityValue = dexterityCarac ? dexterityCarac.caracValue : 0;
  // const dynamicInit = Math.floor((dexterityValue - 10) / 2);

  function initBonus() {
    if (dexterityValue === "") {
      return 0;
    }

    const bonus = Math.floor((dexterityValue - 10) / 2);
    if (bonus < 0 || bonus === 0) {
      return `${bonus.toString()}`;
    }
    if (bonus > 0) {
      return `+${bonus.toString()}`;
    }
    return null;
  }
  // const initChange = (e) => {
  //   const valueInit = e.target.value;
  //   setInitStat(valueInit);
  // };
  const acChange = (e) => {
    const valueAC = e.target.value;
    setAcStat(valueAC);
  };
  const speedChange = (e) => {
    const valueSpeed = e.target.value;
    setSpeedStat(valueSpeed);
  };

  useEffect(() => {
    switch (playerRace) {
      case "human":
        setSpeedStat(30);
        break;
      case "dwarf":
        setSpeedStat(25);
        break;
      case "elf":
        setSpeedStat(30);
        break;
      case "gnome":
        setSpeedStat(25);
        break;
      case "half-elf":
        setSpeedStat(30);
        break;
      case "half-orc":
        setSpeedStat(30);
        break;
      case "halfling":
        setSpeedStat(25);
        break;
      case "dragonborn":
        setSpeedStat(30);
        break;
      case "eladrin":
        setSpeedStat(30);
        break;
      case "tiefling":
        setSpeedStat(30);
        break;
      default:
        setSpeedStat(30);
        break;
    }
  }, [playerRace]);

  const hpChange = (e) => {
    const valueHp = e.target.value;
    setHpStat(valueHp);
  };

  const increaseHP = () => {
    setHpStat(parseInt(hpStat, 10) + 1);
  };

  const decreaseHP = () => {
    if (hpStat > 0) {
      setHpStat(parseInt(hpStat, 10) - 1);
    }
  };

  const succesDeathSave = (succesNUmber) => {
    if (succesNUmber === 1) {
      setSuccess1(!success1);
      if (success2 && success3) {
        setHpStat(1);
        setSuccess1(false);
        setSuccess2(false);
        setSuccess3(false);
      }
    } else if (succesNUmber === 2) {
      setSuccess2(!success2);
      if (success1 && success3) {
        setHpStat(1);
        setSuccess1(false);
        setSuccess2(false);
        setSuccess3(false);
      }
    } else {
      setSuccess3(!success3);
      if (success1 && success2) {
        setHpStat(1);
        setSuccess1(false);
        setSuccess2(false);
        setSuccess3(false);
      }
    }
  };

  if (!isMobile) {
    return (
      <section id="COMBAT_COMPONENT">
        <div className="printDesktop">
          <div className="printCombatComponent">
            <img src={knightImg} alt="knight logo" className="knightLogo" />
            <div className="combatStats">
              <div className="combatStatsNo_HS_DS">
                <div className="combatStatsNoHP">
                  <div className="combatInit">
                    <div className="starContainer">
                      <img
                        src={initImg}
                        alt="Initiative stats with a star form"
                      />
                      {/* Add the variable Init in alt like: ${initStat} */}
                      <input
                        type="text"
                        value={initBonus()}
                        onInput={(e) => {
                          const inputValue = e.target.value;
                          if (!/^[0-9+-]*$/.test(inputValue)) {
                            e.target.value = inputValue.replace(
                              /[^0-9+-]/g,
                              ""
                            );
                          }
                        }}
                        className="initInput"
                      />
                    </div>
                    <p>Init</p>
                  </div>
                  <div className="combatAC">
                    <div className="acContainer">
                      <img src={acImg} alt="AC stats with a shield form" />
                      {/* Add the variable AC in alt like: ${acStat} */}
                      <input
                        type="text"
                        value={acStat}
                        onChange={acChange}
                        onInput={(e) => {
                          const inputValue = e.target.value;
                          if (!/^[0-9]*$/.test(inputValue)) {
                            e.target.value = inputValue.replace(/[^0-9]/g, "");
                          }
                        }}
                        className="acInput"
                      />
                    </div>
                    <p>A.C</p>
                  </div>
                  <div className="combatSpeed">
                    <div className="speedContainer">
                      <img src={speedImg} alt="Speed stats with a boot form" />
                      {/* Add the variable speed in alt like: ${speedStat} */}
                      <input
                        type="text"
                        value={speedStat}
                        onChange={speedChange}
                        onInput={(e) => {
                          const inputValue = e.target.value;
                          if (!/^[0-9]*$/.test(inputValue)) {
                            e.target.value = inputValue.replace(/[^0-9]/g, "");
                          }
                        }}
                        className="speedInput"
                      />
                    </div>
                    <p>Speed</p>
                  </div>
                </div>
                <div className="combatHP">
                  <div className="combatHPButton">
                    <button
                      type="button"
                      className="removeHP"
                      onClick={decreaseHP}
                    >
                      -
                    </button>
                    <div className="hpContainer">
                      <img src={hpImg} alt="aHP stats with a heart form" />
                      {/* Add the variable HP in alt like: ${hpStat} */}
                      <input
                        type="text"
                        value={hpStat}
                        onChange={hpChange}
                        className="hpInput"
                      />
                    </div>
                    <button
                      type="button"
                      className="addHP"
                      onClick={increaseHP}
                    >
                      +
                    </button>
                  </div>
                  <p className="hpText">Current HP</p>
                </div>
              </div>
              <div className="HD_DS_1024">
                {!isMobile && <HealthDice />}
                {!isMobile && <DeathSave />}
              </div>
            </div>
          </div>
        </div>
        <div className="combatComponent">
          <img src={knightImg} alt="knight logo" className="knightLogo" />
          <div className="combatStats">
            <div className="combatStatsNo_HS_DS">
              <div className="combatStatsNoHP">
                <div className="combatInit">
                  <div className="starContainer">
                    <img
                      src={initImg}
                      alt="Initiative stats with a star form"
                    />
                    {/* Add the variable Init in alt like: ${initStat} */}
                    <input
                      type="text"
                      value={initBonus()}
                      onInput={(e) => {
                        const inputValue = e.target.value;
                        if (!/^[0-9+-]*$/.test(inputValue)) {
                          e.target.value = inputValue.replace(/[^0-9+-]/g, "");
                        }
                      }}
                      className="initInput"
                    />
                  </div>
                  <p>Init</p>
                </div>
                <div className="combatAC">
                  <div className="acContainer">
                    <img src={acImg} alt="AC stats with a shield form" />
                    {/* Add the variable AC in alt like: ${acStat} */}
                    <input
                      type="text"
                      value={acStat}
                      onChange={acChange}
                      onInput={(e) => {
                        const inputValue = e.target.value;
                        if (!/^[0-9]*$/.test(inputValue)) {
                          e.target.value = inputValue.replace(/[^0-9]/g, "");
                        }
                      }}
                      className="acInput"
                    />
                  </div>
                  <p>A.C</p>
                </div>
                <div className="combatSpeed">
                  <div className="speedContainer">
                    <img src={speedImg} alt="Speed stats with a boot form" />
                    {/* Add the variable speed in alt like: ${speedStat} */}
                    <input
                      type="text"
                      value={speedStat}
                      onChange={speedChange}
                      onInput={(e) => {
                        const inputValue = e.target.value;
                        if (!/^[0-9]*$/.test(inputValue)) {
                          e.target.value = inputValue.replace(/[^0-9]/g, "");
                        }
                      }}
                      className="speedInput"
                    />
                  </div>
                  <p>Speed</p>
                </div>
              </div>
              <div className="combatHP">
                <div className="combatHPButton">
                  <button
                    type="button"
                    className="removeHP"
                    onClick={decreaseHP}
                  >
                    -
                  </button>
                  <div className="hpContainer">
                    <img src={hpImg} alt="aHP stats with a heart form" />
                    {/* Add the variable HP in alt like: ${hpStat} */}
                    <input
                      type="text"
                      value={hpStat}
                      onChange={hpChange}
                      className="hpInput"
                    />
                  </div>
                  <button type="button" className="addHP" onClick={increaseHP}>
                    +
                  </button>
                </div>
                <p className="hpText">Current HP</p>
              </div>
            </div>
            <div className="HD_DS_1024">
              {!isMobile && <HealthDice />}
              {!isMobile && <DeathSave />}
            </div>
          </div>
        </div>
      </section>
    );
  }
  return isAlive ? (
    <section id="COMBAT_COMPONENT2">
      <div className="printDesktop">
        <div className="printCombatComponent">
          <img src={knightImg} alt="knight logo" className="knightLogo" />
          <div className="combatStats">
            <div className="combatStatsNo_HS_DS">
              <div className="combatStatsNoHP">
                <div className="combatInit">
                  <div className="starContainer">
                    <img
                      src={initImg}
                      alt="Initiative stats with a star form"
                    />
                    {/* Add the variable Init in alt like: ${initStat} */}
                    <input
                      type="text"
                      value={initBonus()}
                      onInput={(e) => {
                        const inputValue = e.target.value;
                        if (!/^[0-9+-]*$/.test(inputValue)) {
                          e.target.value = inputValue.replace(/[^0-9+-]/g, "");
                        }
                      }}
                      className="initInput"
                    />
                  </div>
                  <p>Init</p>
                </div>
                <div className="combatAC">
                  <div className="acContainer">
                    <img src={acImg} alt="AC stats with a shield form" />
                    {/* Add the variable AC in alt like: ${acStat} */}
                    <input
                      type="text"
                      value={acStat}
                      onChange={acChange}
                      onInput={(e) => {
                        const inputValue = e.target.value;
                        if (!/^[0-9]*$/.test(inputValue)) {
                          e.target.value = inputValue.replace(/[^0-9]/g, "");
                        }
                      }}
                      className="acInput"
                    />
                  </div>
                  <p>A.C</p>
                </div>
                <div className="combatSpeed">
                  <div className="speedContainer">
                    <img src={speedImg} alt="Speed stats with a boot form" />
                    {/* Add the variable speed in alt like: ${speedStat} */}
                    <input
                      type="text"
                      value={speedStat}
                      onChange={speedChange}
                      onInput={(e) => {
                        const inputValue = e.target.value;
                        if (!/^[0-9]*$/.test(inputValue)) {
                          e.target.value = inputValue.replace(/[^0-9]/g, "");
                        }
                      }}
                      className="speedInput"
                    />
                  </div>
                  <p>Speed</p>
                </div>
              </div>
              <div className="combatHP">
                <div className="combatHPButton">
                  <button
                    type="button"
                    className="removeHP"
                    onClick={decreaseHP}
                  >
                    -
                  </button>
                  <div className="hpContainer">
                    <img src={hpImg} alt="aHP stats with a heart form" />
                    {/* Add the variable HP in alt like: ${hpStat} */}
                    <input
                      type="text"
                      value={hpStat}
                      onChange={hpChange}
                      className="hpInput"
                    />
                  </div>
                  <button type="button" className="addHP" onClick={increaseHP}>
                    +
                  </button>
                </div>
                <p className="hpText">Current HP</p>
              </div>
            </div>
            <div className="HD_DS_1024">
              {!isMobile && <HealthDice />}
              {!isMobile && <DeathSave />}
            </div>
          </div>
        </div>
      </div>
      <div className="combatComponent">
        <img src={knightImg} alt="knight logo" className="knightLogo" />
        <div className="combatStats">
          <div className="combatStatsNo_HS_DS">
            <div className="combatStatsNoHP">
              <div className="combatInit">
                <div className="starContainer">
                  <img src={initImg} alt="Initiative stats with a star form" />
                  {/* Add the variable Init in alt like: ${initStat} */}
                  <input
                    type="text"
                    value={initBonus()}
                    onInput={(e) => {
                      const inputValue = e.target.value;
                      if (!/^[0-9+-]*$/.test(inputValue)) {
                        e.target.value = inputValue.replace(/[^0-9+-]/g, "");
                      }
                    }}
                    className="initInput"
                  />
                </div>
                <p>Init</p>
              </div>
              <div className="combatAC">
                <div className="acContainer">
                  <img src={acImg} alt="AC stats with a shield form" />
                  {/* Add the variable AC in alt like: ${acStat} */}
                  <input
                    type="text"
                    value={acStat}
                    onChange={acChange}
                    onInput={(e) => {
                      const inputValue = e.target.value;
                      if (!/^[0-9]*$/.test(inputValue)) {
                        e.target.value = inputValue.replace(/[^0-9]/g, "");
                      }
                    }}
                    className="acInput"
                  />
                </div>
                <p>A.C</p>
              </div>
              <div className="combatSpeed">
                <div className="speedContainer">
                  <img src={speedImg} alt="Speed stats with a boot form" />
                  {/* Add the variable speed in alt like: ${speedStat} */}
                  <input
                    type="text"
                    value={speedStat}
                    onChange={speedChange}
                    onInput={(e) => {
                      const inputValue = e.target.value;
                      if (!/^[0-9]*$/.test(inputValue)) {
                        e.target.value = inputValue.replace(/[^0-9]/g, "");
                      }
                    }}
                    className="speedInput"
                  />
                </div>
                <p>Speed</p>
              </div>
            </div>
            <div className="combatHP">
              <div className="combatHPButton">
                <button type="button" className="removeHP" onClick={decreaseHP}>
                  -
                </button>
                <div className="hpContainer">
                  <img src={hpImg} alt="aHP stats with a heart form" />
                  {/* Add the variable HP in alt like: ${hpStat} */}
                  <input
                    type="text"
                    value={hpStat}
                    onChange={hpChange}
                    className="hpInput"
                  />
                </div>
                <button type="button" className="addHP" onClick={increaseHP}>
                  +
                </button>
              </div>
              <p className="hpText">Current HP</p>
            </div>
          </div>
          <div className="HD_DS_1024">
            {!isMobile && <HealthDice />}
            {!isMobile && <DeathSave />}
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div className="deathSaveComponent">
      <img src={knightImg} alt="knight logo" className="knightLogo" />
      <div className="deathSaveRoll">
        <div className="skullImg">
          <img
            src={fail1 && fail2 && fail3 ? deathImg : skullImg}
            alt={fail3 ? "Rest In Peace" : "Skull"}
            className={`skullImage ${fail3 ? "deathImage" : ""}`}
          />
        </div>
        <div className="allCheckbox">
          <div className="successBloc">
            <p>Successes</p>
            <div className="checkBoxesSuccess">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={success1}
                  onChange={() => succesDeathSave(1)}
                  className="input-success"
                />
                <span className="custom-checkbox" />
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={success2}
                  onChange={() => succesDeathSave(2)}
                  className="input-success"
                />
                <span className="custom-checkbox" />
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={success3}
                  onChange={() => succesDeathSave(3)}
                  className="input-success"
                />
                <span className="custom-checkbox" />
              </label>
              {/* {!success3 === false && setHpStat(1)} */}
            </div>
          </div>
          <div className="failBloc">
            <p>Failures</p>
            <div className="checkBoxesFail">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={fail1}
                  onChange={() => setFail1(!fail1)}
                  className="input-fail"
                />
                <span className="custom-checkbox" />
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={fail2}
                  onChange={() => setFail2(!fail2)}
                  className="input-fail"
                />
                <span className="custom-checkbox" />
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={fail3}
                  onChange={() => setFail3(!fail3)}
                  className="input-fail"
                />
                <span className="custom-checkbox" />
              </label>
            </div>
          </div>
        </div>
        <h1 className="deathSaveText">Death Saves</h1>
      </div>
    </div>
  );
}

export default Combat;
