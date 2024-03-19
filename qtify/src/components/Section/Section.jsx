import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import fetchbycategory from "../../api/api";
import { Grid, Box } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import Swiper JS
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LeftArrow from "../../assets/LeftArrow.svg";
import RightArrow from "../../assets/RightArrow.svg";

const Section = ({ type, title }) => {
  const [AlbumData, setAlbum] = useState([]);

  const [CorouselToggle, setCorouselToggle] = useState(true);

  useEffect(() => {
    setAlbumData(type);
  }, []);
  const setAlbumData = async (type) => {
    const albumdata = await fetchbycategory(`/albums/${type}`);
    setAlbum(albumdata);
  };

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <p>{title} Albums</p>
        {/* <button
          className={styles.btnCollapse}
          onClick={() => setCorouselToggle(!CorouselToggle)}
        >
          {!CorouselToggle ? "Show all" : "Collapse"}
        </button> */}

        <button
          className={styles.btnCollapse}
          onClick={() => setCorouselToggle(!CorouselToggle)}
        >
          {!CorouselToggle ? "Show all" : "Collapse"}
        </button>
      </div>

      {AlbumData.length ? (
        <div>
          <Grid container spacing={4} className={styles.section}>
            {CorouselToggle ? (
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
              <div
                style={{
                  width: "100%",
                  position: "relative",
                  marginTop: "5rem",
                }}
              >
                <button
                  className="nextbtn"
                  style={{
                    position: "absolute",
                    top: "43%",
                    zIndex: "10",
                    left: "-1%",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <img src={LeftArrow} alt="left arrorw navigation" />
                </button>
                <button
                  className="prevbtn"
                  style={{
                    position: "absolute",
                    top: "43%",
                    zIndex: "10",
                    right: "-1%",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <img src={RightArrow} alt="right arrorw navigation" />
                </button>

                <Swiper
                  // install Swiper modules
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".prevbtn",
                    prevEl: ".nextbtn",
                  }}
                  slidesPerView={8}
                >
                  {AlbumData.map((album) => {
                    return (
                      <SwiperSlide>
                        <Card
                          imagelink={album.image}
                          follows={album.follows}
                          title={album.title}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            )}
          </Grid>
        </div>
      ) : (
        <Box>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default Section;
