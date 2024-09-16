import React, { Suspense, useEffect } from "react";
import { Spotify, SpotifyJsonType } from "../../../../types/types";
import styles from "./styles.module.css";
import LoadingGlobal from "../../../../loading";
import Card from "../../../UI/card/card";
import { rainbow } from "../../../../utils/names";
import { useFormState } from "react-dom";

type searchresult = Spotify;
//FIX TYPE FOR 'DATA' HERE

const SearchResult: React.FC<searchresult> = (data) => {
  // console.log("data from seearch result", data);

  const random = (track: SpotifyJsonType) => {
    const something = track;
    console.log(something.name);
    console.log(something.id);
  };

  if (data.data === undefined) {
    return <div className={styles.main}>You didn't search anything yet!</div>;
  }

  return (
    <>
      <div className={styles.main}>
        {/* idk what this type DATA is for 'something' */}
        {data.data.map((track: SpotifyJsonType) => (
          <div
            id="card"
            onClick={() => random(track)}
            className={styles.card}
            key={track.id}
          >
            <Card data={track} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResult;
