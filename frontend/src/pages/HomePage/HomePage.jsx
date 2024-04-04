import "./homepage.css";
import Dragonred from "../../assets/dnd_ico/dragon_red.png";
import DnD from "../../assets/dnd_ico/D&D_red2.png";

function HomePage() {
  return (
    <section className="homepage">
      <section className="HP-col1">
        <div className="HP_Intro_bloc">
          <img className="dragon_icone" src={Dragonred} alt="dragonimage" />
          <div className="HP_Main_title_container">
            <div className="red-barre"> </div>
            <h1 className="HP_Main_title">DRAGON PAPERS</h1>
            <div className="red-barre"> </div>
          </div>

          <div className="scrollpaper_container">
            <div className="scrollpaper_contents">
              <div className="HP_input_container">
                <h2>Login</h2>
                <input type="text" name="text" placeholder="enter your login" />
              </div>
              <div className="HP_input_container">
                <h2>password</h2>
                <input
                  type="password"
                  name="text"
                  placeholder="enter your password"
                />
              </div>
              <button type="submit" className="HP_button">
                VALIDATE
              </button>
              <div className="log_options_line">
                <p className="HP_log_options">log-in</p>
                <p>|</p>
                <p className="HP_log_options">register</p>
              </div>
            </div>
          </div>
          <div className="HP_introtext_container">
            <p className="HP_intro_text">
              Create your charactersheets and find ressources to roleplay
            </p>
            <img className="HP_DDlogo" src={DnD} alt="Donjon & Dragon Logo" />
          </div>
        </div>
      </section>
      <section className="HP-col2" />
    </section>
  );
}
export default HomePage;
