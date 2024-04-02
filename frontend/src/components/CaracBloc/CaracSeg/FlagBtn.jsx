import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../../../assets/variables.css";
import "./caracSeg.css";
import medievalBtn from "../../../assets/dnd_ico/medieval.png";
import SkillsBloc from "../SkillsBloc/SkillsBloc";
import SwordCross from "../../../assets/dnd_ico/epees.png";

function FlagBtn(props) {
  const { id, skills } = props;

  // gestion skill pop up

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {modalIsOpen ? (
        <Modal open={modalIsOpen} onClose={closeModal} className="skill_popup">
          <Box>
            <img
              className="sword_cross"
              src={SwordCross}
              alt="-"
              onClick={closeModal}
            />
            <SkillsBloc
              key={skills.skillBlocTitle}
              skillTitle={skills.skillBlocTitle}
              skillsId={skills.skillId}
              skill1={skills.skills1}
              skill2={skills.skills2}
              skill3={skills.skills3}
              skill4={skills.skills4}
              skill5={skills.skills5}
            />
          </Box>
        </Modal>
      ) : (
        <img
          className="Comp_Btn"
          id={id}
          src={medievalBtn}
          alt="Afficher/masquer les compétences"
          onClick={openModal}
        />
      )}
      <div> </div>
    </>
  );
}

export default FlagBtn;
