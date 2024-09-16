import React from "react";
import { SpotifyJsonType } from "../../../types/types";
import spotifyFetchSearch from "../../../functions/spotify/spotifyFetchSearch";
import styles from "./styles.module.css";

type data = {
  data: SpotifyJsonType;
};

const Card: React.FC<data> = (data) => {
  return (
    <>
      <div className={styles.card} key={data.data.id}>
        <div>{data.data.name}</div>
        <div>{data.data.id}</div>
      </div>
    </>
  );
};

export default Card;
