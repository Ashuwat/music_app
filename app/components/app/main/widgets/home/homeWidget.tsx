import React, { useState } from "react";
import styles from "./styles.module.css";
import { DataType } from "../../../../../types/types";
import spotifyFetchSearch from "../../../../../functions/spotify/spotifyFetchSearch";
import SpotifyAuthToken from "../../../../../functions/spotify/spotifyAuthToken";
import { queryEqual } from "firebase/firestore";

type data = {
  data: DataType;
};

const HomeWidget: React.FC<data> = (Data) => {
  const fetchData = "../../../../../functions/spotify/spotifyFetchSearch";
  const spotifyAuth = "../../../../../functions/spotify/spotifyAuthToken";
  const [searchdata, setSearchData] = useState();

  return (
    <>
      <div className={styles.main}>
        <pre>{JSON.stringify(searchdata, null, 4)}</pre>
        <div className={styles.widget}>something</div>
      </div>
    </>
  );
};

export default HomeWidget;
