import React, { useState, useEffect } from "react";
import axios from "axios";
import useCharacter from "../../context/CharacterContext";
import "./featuresBloc.css";

function FeaturesBloc() {
  const [classData, setClassData] = useState({});
  const [featuresByLevel, setFeaturesByLevel] = useState([]); // Ajouter le state featuresByLevel
  const { playerClass, playerLevel } = useCharacter();
  console.info("classData:", classData);
  console.info("featuresByLevel:", featuresByLevel);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://www.dnd5eapi.co/api/classes/${playerClass}/features`;
        const response = await axios.get(url);
        console.info("response:", response.data.results);

        // Créer un tableau vide pour stocker les données de chaque feature
        const features = [];

        // Itérer sur le tableau de features et récupérer l'URL de chaque feature
        const featureUrls = response.data.results.map((feature) => feature.url);

        // Itérer sur le tableau d'URLs et récupérer les données de chaque feature
        for (const url of featureUrls) {
          const featureResponse = await fetch(`https://www.dnd5eapi.co${url}`);
          const featureData = await featureResponse.json();
          features.push(featureData);
        }

        // Mettre à jour le state avec les données de features
        setClassData(features);

        // Réorganiser les features par niveau
        const featuresByLevel = features.reduce((acc, feature) => {
          const level = feature.level;
          if (!acc[level]) {
            acc[level] = [];
          }
          acc[level].push(feature);
          return acc;
        }, {});

        // Convertir l'objet en tableau pour faciliter l'affichage
        const featuresArray = Object.entries(featuresByLevel).map(
          ([level, features]) => ({
            level: parseInt(level, 10),
            features,
          })
        );

        // Créer un tableau avec les features regroupées par niveau
        const featuresByLevelArray = featuresArray.map(
          ({ level, features }) => {
            // Retourner un tableau avec le niveau et les objets des features
            return [level, features.map((feature) => feature)];
          }
        );

        // Mettre à jour le state avec les données regroupées par niveau
        setFeaturesByLevel(featuresByLevelArray);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, [playerClass]);

  const onFeaturingChoice = (feature) => {
    // Construire l'URL de la requête fetch en utilisant le slug de la feature
    const url = `https://www.dnd5eapi.co/api/features/${feature.index}/`;

    // Effectuer la requête fetch en utilisant l'URL construite
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Traiter les données de la réponse ici
        console.log(data);
      })
      .catch((error) => {
        // Gérer les erreurs de la requête fetch ici
        console.error(error);
      });
  };

  return (
    <section className="features_Bloc">
      <h2 className="features_Bloc_title">FEATURES</h2>
      {/* Affichez les features ici */}
      {featuresByLevel
        .filter(([level]) => level <= playerLevel) // Filtrer les features en fonction du niveau du personnage
        .map(([level, features]) => (
          <React.Fragment key={level}>
            <section className="features_list_level_bloc">
              <h3 className="features_list_title">Level {level}:</h3>
              <ul className="features_list">
                {features.map((feature) => (
                  <li
                    key={feature.index}
                    className="features_item"
                    onClick={() => onFeaturingChoice(feature)}
                  >
                    {feature.name}
                  </li>
                ))}
              </ul>
            </section>
          </React.Fragment>
        ))}
    </section>
  );
}

export default FeaturesBloc;
