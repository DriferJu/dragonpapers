import "./homepage.css";
import Dragonred from "../../assets/dnd_ico/dragon_red.png";
import DnD from "../../assets/dnd_ico/D&D.png";

function HomePage() {
  return (
    <section className="homepage">
      <div className="entrance">
        <img className="dragon_icone" src={Dragonred} alt="dragonimage" />
        <div className="Main_title_div">
          <div className="red-barre"> </div>
          <h1 className="Main_title">DRAGON PAPER</h1>
          <div className="red-barre"> </div>
        </div>

        <div className="scrollpaper_items">
          <a className="link_Home-Charac_sheet" href="./charactersheet">
            <p className="home_Title">
              CREATE YOUR <br /> CHACTER SHEET
            </p>
          </a>
          <img className="dnd_title" src={DnD} alt="DnD" />
        </div>

        <p className="paragraph">
          Dungeons & Dragons is a role-playing game where players create
          characters with unique abilities and embark on adventures in a fantasy
          world with their imaginations to navigate challenges, solve puzzles,
          engage in combat, and interact with the game's rich narrative.
        </p>
      </div>
    </section>
  );
}
export default HomePage;
