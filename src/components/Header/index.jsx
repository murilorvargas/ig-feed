import React from 'react';

import styles from "./styles.module.css";

import igFeedLogo from "../../assets/ig-feed-logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <img src={igFeedLogo} alt="Ig Feed Logotipo" />
    </header>
  );
}

export { Header };