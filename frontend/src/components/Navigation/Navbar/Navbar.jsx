import { useNavigate } from "react-router-dom";

import "./navbar.css";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DragonLogo from "../../../assets/dnd_ico/dragon_red.png";

function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section className="top-nav">
      <div
        role="button"
        className="NavLogo"
        onClick={() => handleNavigation("/")}
        tabIndex={0}
      >
        <img src={DragonLogo} alt="dragonLogo" className="NavDragonLogo" />
        <h1 className="NavTitle">DRAGON PAPERS</h1>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" />
      </label>
      <ul className="menu">
        <li onClick={() => handleNavigation("/charactersheet")}>
          CREATE CHARACTER SHEET
        </li>
        <li onClick={() => handleNavigation("/")}>
          <LoginIcon className="logico" />
        </li>
        <li onClick={() => handleNavigation("/")}>
          <PersonAddAltIcon className="logico" />
        </li>
      </ul>
    </section>
  );
}

export default Navbar;
