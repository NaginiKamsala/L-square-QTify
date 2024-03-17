import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

function Card({ imagelink, follows, title }) {
  return (
    <>
      <div className={styles.carddiv}>
        <div className={styles.card}>
          <img src={imagelink} alt="album image" />
          <div className={styles.banner}>
            <Chip
              className={styles.chip}
              label={`${follows} follows`}
              size="small"
            />
          </div>
        </div>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
