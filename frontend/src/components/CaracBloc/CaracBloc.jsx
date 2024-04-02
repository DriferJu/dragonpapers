import "./caracBloc.css";
import CaracSeg from "./CaracSeg/CaracSeg";
import SkillsBloc from "./SkillsBloc/SkillsBloc";
import ArrowLine from "../../assets/dnd_ico/ArrowLine_1_b.png";
import useCharacter from "../../context/CharacterContext";

function CaracBloc() {
  const { caracs, skillsBlocs } = useCharacter();
  // setSkillsBlocs(
  //   skillsBlocs.map((skill) =>
  //     skill.skillId === name
  //       ? { ...skill, caracValue: +e.target.value }
  //       : skill
  //   )
  // );

  return (
    <>
      <section id="CARACS_screen">
        {/* smartphone */}
        <div id="carac_MQ_smartPh">
          {/* smartphone CARACS */}
          <div className="carac_Bloc">
            {caracs.map((carac, index) => (
              <CaracSeg
                key={carac.caracName}
                id={carac.caracName}
                skills={skillsBlocs[index]}
                caraClass={carac.caracName}
                name={carac.caracName}
                value={carac.caracValue}
                bonus={carac.caracBonus}
                save={carac.caracSave}
              />
            ))}
          </div>
        </div>
        {/* desktop */}
        <div id="carac_MQ_deskT">
          {/* desktop CARACS */}
          <div id="carac_MQ_deskT_position">
            <div className="carac_Bloc">
              {caracs.map((carac, index) => (
                <>
                  <CaracSeg
                    key={carac.caracName}
                    id={carac.caracName}
                    skills={skillsBlocs[index]}
                    caraClass={carac.caracName}
                    name={carac.caracName}
                    value={carac.caracValue}
                    bonus={carac.caracBonus}
                    save={carac.caracSave}
                  />
                  {index === 2 && (
                    <div id="caracs_arrow_line">
                      <img src={ArrowLine} alt="-" />
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* print version */}
      <section id="CARACS_Print">
        <div className="carac_Bloc_Print">
          {caracs.slice(0).map((carac) => (
            <CaracSeg
              key={carac.caracName}
              id={carac.caracName}
              caraClass={carac.caracName}
              name={carac.caracName}
              value={carac.caracValue}
              bonus={carac.caracBonus}
              save={carac.caracSave}
            />
          ))}
        </div>
        <div className="skills_bloc_Print">
          {skillsBlocs.slice(0).map((skill) => (
            <SkillsBloc
              key={skill.skillBlocTitle}
              skillTitle={skill.skillBlocTitle}
              skillsId={skill.skillId}
              skill1={skill.skills1}
              skill2={skill.skills2}
              skill3={skill.skills3}
              skill4={skill.skills4}
              skill5={skill.skills5}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default CaracBloc;
