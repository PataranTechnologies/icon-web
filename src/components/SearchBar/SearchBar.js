import React, { useEffect, useState, useRef } from 'react';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import searchIcon from "../../assets/search.svg";

import styles from "./SearchBar.module.css";

const SearchBar = ({placeholder, searchName}) => {
    const [currentPage, setCurrentPage] = useState("1");
    const [totalPages] = useState(40);

    const inputRef = useRef();
  
    useEffect(() => {
      inputRef.current.focus();
    }, []);
  
    const pageNumberHandler = (event) => {
      event.preventDefault();
    };
  
    const pageChangeHandler = (event) => {
      setCurrentPage(event.target.value);
    };
  

    return (
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            <div className={styles.searchBoxContainer}>
              <img
                src={searchIcon}
                alt={placeholder}
                className={styles.searchIcon}
              />
              <input
                type="text"
                placeholder={placeholder}
                name={searchName}
                className={styles.searchBoxInput}
                ref={inputRef}
              />
            </div>
            <div className={styles.pagesInfo}>
              <div className={styles.pageInfo}>
                <p>Page</p>
                <form onSubmit={pageNumberHandler}>
                  <input
                    type="text"
                    name="pageNumber"
                    value={currentPage}
                    onChange={pageChangeHandler}
                  />
                </form>
                <p>of {totalPages}</p>
              </div>
              <div className={styles.pageNavigators}>
                <button>
                  <ChevronLeftIcon />
                </button>
                <button>
                  <ChevronRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default SearchBar;
