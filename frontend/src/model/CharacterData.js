import Health from "./Health";
import Stats from "./Stats";

export default class CharacterData {
  nom = "";

  stats = undefined;

  health = undefined;

  constructor() {
    this.nom = "";
    this.stats = new Stats();
    this.health = new Health();
  }
}
