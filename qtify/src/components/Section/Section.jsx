import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import fetchbycategory from "../../api/api";
import { Grid, Box } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";

// import Swiper core and required modules
import { Navigation, Controller } from "swiper/modules";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LeftArrow from "../../assets/LeftArrow.svg";
import RightArrow from "../../assets/RightArrow.svg";
import CarouselLeftnavigation from "../Corousel/CarouselLeftnavigation";

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

        <button
          className={styles.btnCollapse}
          onClick={() => setCorouselToggle(!CorouselToggle)}
        >
          {!CorouselToggle ? "Show all" : "Collapse"}
        </button>
      </div>

      {AlbumData.length ? (
        <div>
          <div container className={styles.section}>
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
                  marginTop: "1rem",
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

                {/* <CarouselLeftnavigation /> */}
                <button
                  className="prevbtn"
                  style={{
                    position: "absolute",
                    top: "43%",
                    zIndex: "10",
                    right: "2%",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <img src={RightArrow} alt="right arrorw navigation" />
                </button>

                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Controller]}
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
          </div>
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
