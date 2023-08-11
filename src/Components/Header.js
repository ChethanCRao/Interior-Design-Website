import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <>
      <nav>
        <img src="./images/Logo.svg" alt="logo" />
        <h2 style={{ fontFamily: "'Times New Roman', Times, serif", paddingRight: "330px",fontWeight: "bold" }}>Interno</h2>
        <span style={{marginRight: "145px"}}>
        <NavLink style={{ marginRight: "50px" }} to="/">Home</NavLink>
        <NavLink style={{ marginRight: "50px" }} to="/About">About</NavLink>
        <NavLink style={{ marginRight: "50px" }} to="/Services">Services</NavLink>
        <NavLink style={{ marginRight: "50px" }} to="/Project">Project</NavLink>
        <NavLink style={{ marginRight: "50px" }} to="/Blog">Blog</NavLink>
        <NavLink style={{ marginRight: "50px" }} to="/Contact">Contact</NavLink>
        <img src="./images/Vector.svg" alt="Search" />
        </span>
      </nav>
    </>
  );
}
