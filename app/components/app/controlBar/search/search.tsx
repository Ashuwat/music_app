"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";
import spotifyFetchSearch from "../../../../functions/spotify/spotifyFetchSearch";
import { useFormState } from "react-dom";
import { DataType, SpotifyJsonType } from "../../../../types/types";
import { SourceTextModule } from "vm";
import { debounce } from "../../../../functions/debounce";
import SearchResult from "../searchResult/searchResult";
import KeyboardEvent, {
  isInputOrTextFocused,
} from "../../../../functions/keyboardHotkey";

const Search = (data: { data: DataType }) => {
  const [query, setQuery] = useState<string | undefined>();
  const [spotifyData, setSpotifyData] = useState<
    SpotifyJsonType[] | undefined
  >();
  // const [searchData, setSearchData] = useState<any[]>();

  //update the query
  const updateQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  //made by chatgpt so look over it | debounce callback
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
    const result = response.tracks.items;
    if (result) {
      setSpotifyData(result);
    }
  };

  //get the query after dom loaded
  useEffect(() => {
    console.log(query);
    if (query && query !== "") {
      debouncedSearch(query);
    }
  }, [query]);

  //hotkeys
  KeyboardEvent((event: KeyboardEvent) => {
    const input = document.getElementById("search");
    if (event.key === "/" && !isInputOrTextFocused()) {
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
          <SearchResult spotifyData={spotifyData} data={data.data} />
        </div>
      </div>
    </>
  );
};

export default Search;
