import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

function Card({ imagelink, follows, likes, title, isTopNew }) {
  // let {  } = cardData;

  return (
    <>
      <div className={styles.carddiv}>
        <div className={styles.card}>
          <img src={imagelink} alt="album image" />
          <div className={styles.banner}>
            <div className={styles.chip}>
              {" "}
              {isTopNew ? `${follows} follows` : `${likes} likes`}
            </div>
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
