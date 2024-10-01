import React, { useState } from "react";
import styles from "./styles.module.css";
import { DataType } from "../../../../../types/types";
import spotifyFetchSearch from "../../../../../functions/spotify/spotifyFetchSearch";
import SpotifyAuthToken from "../../../../../functions/spotify/spotifyAuthToken";
import { queryEqual } from "firebase/firestore";
import QueueCard from "../../../../UI/queueCard/queueCard";


const HomeWidget = (Data: {data: DataType}) => {

  return (
    <>
      <div className={styles.main}>
        <p>
          {Data.data.Queue && Data.data.Queue.map((item) => (
            <p>{JSON.stringify(item, null, 4)}</p>
          ))}
        </p>
      </div>
    </>
  );
};

export default HomeWidget;
