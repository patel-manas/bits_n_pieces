import React from "react";
import { FaBars } from "react-icons/fa";

export default function NavBar(props) {
  return (
    <div className="navbar">
      <div className="navbar-icon">
        <FaBars />
      </div>
      <div className="navbar-content">{props.children}</div>
    </div>
  );
}
