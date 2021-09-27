import styles from "./Header.module.css";

import { Link } from "react-router-dom";

import logo from "../static/images/logo.png";

const Header = () => (
  <header>
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/about">About</Link>
      <Link to="/stats">Statistics</Link>
      <Link to="/vote">Vote</Link>
      <Link to="/login" className={styles.login}>
        Log in
      </Link>
    </nav>
  </header>
);

export default Header;
