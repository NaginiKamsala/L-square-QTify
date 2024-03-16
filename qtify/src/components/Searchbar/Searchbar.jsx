import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Searchbar.module.css";

const Searchbar = (searchText) => {
  const [searchValue, setSearachValue] = useState("");

  const handleChange = (e) => {
    setSearachValue(e.target.value);
    searchText = searchValue;
  };

  const handleSearch = () => {
    console.log(searchValue);
    setSearachValue("");
  };

  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        name="search"
        id="search"
        className={styles.search}
        placeholder="Search your favourite album"
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Searchbar;
