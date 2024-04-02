import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import fetchbycategory from "../../api/api";
import { Grid, Box } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import axios from "axios";
// import Swiper core and required modules
import { Navigation } from "swiper/modules";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LeftArrow from "../../assets/LeftArrow.svg";
import RightArrow from "../../assets/RightArrow.svg";

const Section = ({ type, title }) => {
  const [AlbumData, setAlbum] = useState([]);
  const [FilteredData, setFileteredData] = useState([]);
  const [isTopNew, setIsTopNew] = useState(true);
  const [CorouselToggle, setCorouselToggle] = useState(false);
  const [genres, setGenres] = useState([]);
  //const [value, setValue] = React.useState("one");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const setAlbumData = async (type) => {
    let albumdata = [];
    if (type === "top" || type === "new") {
      albumdata = await fetchbycategory(`/albums/${type}`);
      setIsTopNew(true);
    } else {
      albumdata = await fetchbycategory(`/${type}`);
      setIsTopNew(false);
    }

    setAlbum(albumdata);
    setFileteredData(albumdata);
  };

  const setgenreData = async () => {
    const { data } = await axios.get(
      "https://qtify-backend-labs.crio.do/genres"
    );
    console.log(data);
    setGenres(data.data);
  };

  useEffect(() => {
    setAlbumData(type);
    setgenreData();
  }, []);
  console.log(genres);

  const handlefilters = (type) => {
    // all ---> albumdata
    //type ==> type data

    if (type === "all") {
      setAlbum(FilteredData);
    } else {
      let typeDataFilter = FilteredData.filter(
        (album) => album.genre.key === type
      );
      setAlbum(typeDataFilter);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <p>{title}</p>

        {isTopNew && (
          <button
            className={styles.btnCollapse}
            onClick={() => setCorouselToggle(!CorouselToggle)}
          >
            {!CorouselToggle ? "Show all" : "Collapse"}
          </button>
        )}
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
                {!isTopNew && (
                  <div className={styles.filters}>
                    {/* <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="wrapped label tabs example"
                    >
                      <Tab value="all" label="All" />
                      <Tab value="rock" label="Rock" />
                      <Tab value="pop" label="Pop" />
                      <Tab value="jazz" label="Jazz" />
                      <Tab value="blues" label="Blues" />
                    </Tabs> */}
                    <button
                      className={styles.filterbutton}
                      onClick={() => handlefilters("all")}
                      name="all"
                    >
                      All
                    </button>
                    {genres.map((genre) => {
                      return (
                        <>
                          <button
                            className={styles.filterbutton}
                            onClick={() => handlefilters(`${genre.key}`)}
                            name={genre.key}
                          >
                            {genre.label}
                          </button>
                        </>
                      );
                    })}
                  </div>
                )}
                <button
                  className={`nextbtn${type}`}
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
                  className={`prevbtn${type}`}
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
                  modules={[Navigation]}
                  navigation={{
                    nextEl: `.prevbtn${type}`,
                    prevEl: `.nextbtn${type}`,
                  }}
                  slidesPerView={8}
                >
                  {AlbumData.map((album) => {
                    return (
                      <SwiperSlide>
                        {isTopNew ? (
                          <Card
                            imagelink={album.image}
                            follows={album.follows}
                            title={album.title}
                            isTopNew={isTopNew}
                          />
                        ) : (
                          <Card
                            imagelink={album.image}
                            likes={album.likes}
                            title={album.title}
                            isTopNew={isTopNew}
                          />
                        )}
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
