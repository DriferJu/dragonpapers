import React from "react";
import Sword from "../../../assets/dnd_ico/epee.png";
import "../featuresBloc.css";

function FeaturesPopUp({selectFeature}) {
    const { name, class: featureClass, desc, level } = selectFeature || {};
    console.info("selectFeatureProps:", selectFeature)
  console.info("name:", name)
  console.info("desc:", desc)
  console.info("featureClass:", [featureClass])
  const descString = Array.isArray(desc) ? desc.join(' ') : '';
  console.info("descString:", descString)
  const featClass = featureClass ? featureClass.name : '';
  console.info("featClass:", featClass)

  return (
    <section id="Feats_PopUp">
      <div className="Feats_PopUp_bloc_bkg">
        <div className="Feats_pop_up_content">
          <h2 className="Feats_item_title">{name}</h2>
          <p className="Feats_item_infos">
            ( {featClass} / level {level})
          </p>
          <img src={Sword} alt="sword" className="Feat_sword_ico" />
          <p className="Feats_item_infos">
            <span className="Feats_item_bold">Description : </span>
          </p>
          <p className="Feats_item_infos Feats_item_descript">{descString}</p>

          <div id="Feat_sword_ico_down">
            <img src={Sword} alt="sword" className="Feat_sword_ico" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesPopUp;
