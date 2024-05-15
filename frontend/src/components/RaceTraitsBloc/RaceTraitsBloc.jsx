import React, { useState, useEffect } from "react";
import axios from "axios";
import useCharacter from "../../context/CharacterContext";
import "./raceTraitsBloc.css";

function RaceTraitsBloc() {
  const [raceData, setRaceData] = useState({});
  const { playerRace } = useCharacter();
  const raceSlug = playerRace.toLowerCase();
  console.info("playerRace:", playerRace);
  console.info("raceSlug:", raceSlug);
  console.info("raceData:", raceData);

  const raceNameUpperCase =
    raceData[0] && raceData[0].name ? raceData[0].name.toUpperCase() : "";
  const vision = raceData[0] && raceData[0].vision ? raceData[0].vision : "";

  const traits = raceData[0] && raceData[0].traits ? raceData[0].traits : "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.open5e.com/v1/races/?slug__in=&slug__iexact=${raceSlug}&slug=&name__iexact=&name=&desc__iexact=&desc=&desc__in=&desc__icontains=&document__slug__iexact=&document__slug=&document__slug__in=&asi_desc__iexact=&asi_desc=&asi_desc__icontains=&age__iexact=&age=&age__icontains=&alignment__iexact=&alignment=&alignment__icontains=&size__iexact=&size=&size__icontains=&speed_desc__iexact=&speed_desc=&speed_desc__icontains=&languages__iexact=&languages=&languages__icontains=&vision__iexact=&vision=&vision__icontains=&traits__iexact=&traits=&traits__icontains=&document__slug__not_in=`;
        const response = await axios.get(url);
        console.info("response:", response.data.results);
        setRaceData(response.data.results);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, [playerRace]);

  const renderTraits = () => {
    if (!raceData[0] || !raceData[0].traits) return null;

    const formattedTraits = raceData[0].traits
      .split("\n")
      .map((trait, index) => {
        // Supprimer les `_` et `*`
        const cleanTrait = trait.replace(/[_*]/g, "");
        return (
          <p key={index} className="trait_items">
            <span className="trait-name">{cleanTrait.split(".")[0]}</span>
            {cleanTrait.substr(cleanTrait.indexOf(".") + 1)}
          </p>
        );
      });

    return formattedTraits;
  };

  const renderVision = () => {
    if (!raceData[0] || !raceData[0].vision) return null;

    const formattedVision = raceData[0].vision
      .split("\n")
      .map((vision, index) => {
        // Supprimer les `_` et `*`
        const cleanVision = vision.replace(/[_*]/g, "");
        return (
          <p key={index} className="trait_items">
            <span className="trait-name">{cleanVision.split(".")[0]}</span>
            {cleanVision.substr(cleanVision.indexOf(".") + 1)}
          </p>
        );
      });

    return formattedVision;
  };

  return (
    <section className="trait_Bloc">
      <h2 className="trait_Bloc_title">TRAITS : {raceNameUpperCase} </h2>
      <section className="traits_list">
        <div>{renderTraits()}</div>
        <div>{renderVision()}</div>
      </section>
    </section>
  );
}

export default RaceTraitsBloc;
