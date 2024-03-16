import React from "react";
import FeedbackButton from "../FeedbackButton/FeedbackButton";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbarStyle}>
      <Link to="/">
        <Logo />
      </Link>
      <Searchbar />
      <FeedbackButton />
    </nav>
  );
}

export default Navbar;
