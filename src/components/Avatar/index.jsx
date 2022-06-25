import React from 'react';

import styles from "./styles.module.css";

function Avatar({ hasBorder = true, src }) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatarWithoutBorder} 
      src={src}
    />
  );
}

export default Avatar;