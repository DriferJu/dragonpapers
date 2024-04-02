import { useState } from "react";
import "./DeathSave.css";
import skullImg from "../../assets/dnd_ico/skull.png";
import knightImg from "../../assets/dnd_ico/chevalier.png";
import deathImg from "../../assets/dnd_ico/tombal.png";

function DeathSave() {
  const [success1, setSuccess1] = useState(false);
  const [success2, setSuccess2] = useState(false);
  const [success3, setSuccess3] = useState(false);
  const [fail1, setFail1] = useState(false);
  const [fail2, setFail2] = useState(false);
  const [fail3, setFail3] = useState(false);

  return (
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
                  onChange={() => setSuccess1(!success1)}
                  className="input-success"
                />
                <span className="custom-checkbox" />
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={success2}
                  onChange={() => setSuccess2(!success2)}
                  className="input-success"
                />
                <span className="custom-checkbox" />
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={success3}
                  onChange={() => {
                    setSuccess3(!success3);
                    //   if (success3) {
                    //     setHpStat(1);
                    //   }
                  }}
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

export default DeathSave;
