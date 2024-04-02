import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? "active" : ""}`}>
      <button
        type="button"
        className="menu-icon"
        onClick={toggleMenu}
        label="Toggle Menu"
      >
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </button>
    </div>
  );
}

export default Navbar;
