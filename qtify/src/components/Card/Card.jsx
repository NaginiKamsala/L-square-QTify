import React from "react";
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

function Card({ imagelink, follows, likes, title, isTopNew }) {
  // let {  } = cardData;

  return (
    <>
      <Tooltip title={title} placement="top">
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
      </Tooltip>
    </>
  );
}

export default Card;
