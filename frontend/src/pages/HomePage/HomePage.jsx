import { useState } from "react";
import "./homepage.css";
import Dragonred from "../../assets/dnd_ico/dragon_red.png";
import DnD from "../../assets/dnd_ico/D&D_red2.png";

function HomePage() {
  const [isLogin, setIsLogin] = useState(true);

  function handleRegister() {
    setIsLogin(false);
  }

  function handleLogin() {
    setIsLogin(true);
  }

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
          {isLogin && (
            <>
              <div className="scrollpaper_container">
                <div className="scrollpaper_contents">
                  <div className="HP_input_container">
                    <h2>Login</h2>
                    <input
                      type="text"
                      name="text"
                      placeholder="enter your login"
                    />
                  </div>
                  <div className="HP_input_container">
                    <h2>Password</h2>
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
                    <p className="HP_log_options_active">login</p>
                    <p>|</p>
                    <p
                      className="HP_log_options"
                      onClick={() => {
                        handleRegister();
                      }}
                    >
                      register
                    </p>
                  </div>
                </div>
              </div>
              <div className="HP_introtext_container">
                <p className="HP_intro_text">
                  Create your charactersheets to roleplay
                </p>
                <img
                  className="HP_DDlogo"
                  src={DnD}
                  alt="Donjon & Dragon Logo"
                />
              </div>
            </>
          )}
          {!isLogin && (
            <div className="scrollpaper_container_register">
              <div className="scrollpaper_contents_register">
                <div className="HP_input_container">
                  <h2>choose Pseudo</h2>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength="4"
                    maxLength="8"
                    size="20"
                  />
                </div>
                <div className="HP_input_container">
                  <h2>enter Email</h2>

                  <input
                    type="email"
                    id="email"
                    pattern=".+@example\.com"
                    size="20"
                    required
                  />
                </div>
                <div className="HP_input_container">
                  <h2>choose Password</h2>
                  <input
                    type="password"
                    id="pass"
                    name="password"
                    minLength="8"
                    size="20"
                    required
                  />
                </div>
                <div className="HP_input_container">
                  <h2>confirm Password</h2>
                  <input
                    type="password"
                    id="pass"
                    name="password"
                    minLength="8"
                    size="20"
                    required
                  />
                </div>
                <button type="submit" className="HP_button" size="15">
                  SUBMIT
                </button>
                <div className="log_options_line">
                  <p
                    className="HP_log_options"
                    onClick={() => {
                      handleLogin();
                    }}
                  >
                    login
                  </p>
                  <p>|</p>
                  <p className="HP_log_options_active">register</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="HP-col2" />
    </section>
  );
}
export default HomePage;
