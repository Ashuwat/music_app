"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";
import spotifyFetchSearch from "../../../../functions/spotify/spotifyFetchSearch";
import { useFormState } from "react-dom";
import { SpotifyJsonType } from "../../../../types/types";
import { SourceTextModule } from "vm";
import { debounce } from "../../../../functions/debounce";
import SearchResult from "../searchResult/searchResult";
import openCloseBar from "../../../../functions/keyboardHotkey";
import {
  focusOnSearch,
  something,
} from "../../../../functions/jsResponsive/search/searchResult";

const Search = () => {
  const [query, setQuery] = useState<string | undefined>();
  const [data, setData] = useState<SpotifyJsonType | undefined>();
  const [timer, setTimer] = useState<number>();
  // const [searchData, setSearchData] = useState<[any]>();

  //update the query
  const updateQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  //made by chatgpt so look over it |
  const debouncedSearch = useCallback(
    debounce((searchTerm: string) => {
      querySearch(searchTerm);
      console.log("Searching for:", searchTerm);
    }, 500),
    []
  );
  //call spotify api to retrieve search
  const querySearch = async (q: string) => {
    const response = await spotifyFetchSearch(q);
    // console.log(response);
    const result = response.tracks.items;
    if (result) {
      setData(result);
      console.log("Result:", data);
    }
  };

  //get the query after dom loaded
  useEffect(() => {
    console.log(query);
    if (query && query !== "") {
      console.log("there is something here");
      debouncedSearch(query);
    }
  }, [query]);

  //hotkeys
  openCloseBar((event: KeyboardEvent) => {
    const input = document.getElementById("search");
    if (event.key === "/") {
      event.preventDefault();
      if (input) {
        input.focus();
      }
    }
    if (event.key === "Escape") {
      event.preventDefault();
      if (input) {
        input.blur();
      }
    }
  });

  return (
    <>
      <div id="searchInput" className={styles.main}>
        <input
          onChange={updateQuery}
          id="search"
          placeholder="Search a song!"
          className={styles.input}
        />
        <div id="searchResult" className={styles.searchResultComp}>
          <SearchResult data={data} />
        </div>
      </div>
    </>
  );
};

export default Search;
