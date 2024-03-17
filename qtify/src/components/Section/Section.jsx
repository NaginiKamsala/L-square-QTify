import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import fetchbycategory from "../../api/api";
import { Grid, Box } from "@mui/material";
import { SentimentDissatisfied } from "@mui/icons-material";
import Card from "../Card/Card";

/* 
description: "Quam nobis aut.\nRepudiandae itaque culpa molestiae explicabo ex nostrum fugiat.\nSapiente quam tenetur ipsa."
follows: 12945
id
: 
"d286d5b4-dbaf-4a15-a551-ea3fa8ccfd4f"
image
: 
"https://images.pexels.com/photos/145707/pexels-photo-145707.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
slug
: 
"slushy-assignment"
songs
: 
(36) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
title
: 
"Slushy Assignment"*/
const Section = () => {
  const [AlbumData, setAlbum] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);
  useEffect(() => {
    setAlbumData();
  }, []);
  const setAlbumData = async () => {
    const albumdata = await fetchbycategory("/albums/top");
    setAlbum(albumdata);
    console.log(albumdata);
  };
  const handleCollapse = (e) => {
    setIsShowAll(false);
    console.log(e.target);
  };
  return (
    <>
      <div className={styles.title}>
        <p>Top Albums</p>
        <button className={styles.btnCollapse} onClick={handleCollapse}>
          Collapse
        </button>
      </div>
      <div>
        <Grid container spacing={4} className={styles.section}>
          {AlbumData.length ? (
            AlbumData.map((album) => (
              <Grid item key={album.id}>
                <Card
                  imagelink={album.image}
                  follows={album.follows}
                  title={album.title}
                />
              </Grid>
            ))
          ) : (
            <Box>
              <SentimentDissatisfied color="action" />
              <h4 style={{ color: "#636363" }}>No Albums found</h4>
            </Box>
          )}
        </Grid>
      </div>
    </>
  );
};

export default Section;
