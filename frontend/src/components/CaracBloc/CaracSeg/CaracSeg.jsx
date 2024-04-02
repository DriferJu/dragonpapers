import React, { useState } from "react";
import "../../../assets/variables.css";
import "./caracSeg.css";
import FlagBtn from "./FlagBtn";
import ArrowLine2 from "../../../assets/dnd_ico/ArrowLine_2.png";
import useCharacter from "../../../context/CharacterContext";

function CaracSeg(props) {
  const { name, id, caraClass, skills, value } = props;
  const isFlagBtnHidden = id === "CONST";
  const showArrowLine = id !== "CHAR";

  const { caracs, setCaracs } = useCharacter();

  const [caracNum, setCaracNum] = useState(value);

  const handleCaracNumChange = (e) => {
    if (/^\d{0,2}$/.test(e.target.value)) {
      setCaracNum(e.target.value);
      setCaracs(
        caracs.map((carac) =>
          carac.caracName === name
            ? { ...carac, caracValue: +e.target.value }
            : carac
        )
      );

      //   switch (name) {
      //     case "STR":
      //       setStr(e.target.value);
      //       break;
      //     case "DEX":
      //       setDex(e.target.value);
      //       break;
      //     case "CONST":
      //       setCon(e.target.value);
      //       break;
      //     case "INT":
      //       setInt(e.target.value);
      //       break;
      //     case "WIS":
      //       setWis(e.target.value);
      //       break;
      //     case "CHAR":
      //       setChar(e.target.value);
      //       break;
      //     default:
      //       break;
      //   }
    }
  };

  function statBonus() {
    if (caracNum === "") {
      return 0;
    }

    const bonus = Math.floor((caracNum - 10) / 2);
    if (bonus < 0 || bonus === 0) {
      return `${bonus.toString()}`;
    }
    if (bonus > 0) {
      return `+${bonus.toString()}`;
    }
    return null;
  }

  const saveBonus = statBonus;

  return (
    <>
      <div className="carac_segment" id={id}>
        {/* // top // */}
        <div className="carac_num_container">
          <input
            type="text"
            className="carac_num_container carac_num"
            value={caracNum}
            onChange={handleCaracNumChange}
          />
        </div>
        {/* // main // */}
        <div className="carac_main_content">
          <p className="carac_title">{name}</p>
          <div className="carac_bonus_content">
            <p className={`carac_bonus ${caraClass}`}>{statBonus()}</p>
          </div>
        </div>
        {/* // bottom // */}
        <div className="bonus_save_content">
          <p className="bonus_save">save</p>
          <p className="bonus_save_num">{saveBonus()}</p>
        </div>
        {!isFlagBtnHidden && <FlagBtn id="goPopUp" skills={skills} />}
      </div>
      {showArrowLine && (
        <div id="caracs_arrow_line_2">
          <img src={ArrowLine2} alt="-" />
        </div>
      )}
    </>
  );
}

export default CaracSeg;
