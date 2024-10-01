import React, { Suspense, useEffect, useState } from "react";
import { DataType, SpotifyJsonType } from "../../../../types/types";
import styles from "./styles.module.css";
import LoadingGlobal from "../../../../loading";
import Card from "../../../UI/searchCard/searchCard";
import callYoutubeEmbed from "../../../../functions/youtube/youtubeApi";

// type spotifyAndData = {
//   spotifyData: SpotifyJsonType[] | undefined;
//   data: DataType;
// };

const SearchResult = ({
  spotifyData,
  data,
}: {
  spotifyData: SpotifyJsonType[] | undefined;
  data: DataType;
}) => {
  // const [lastIndex, setLastIndex] = useState<number>(0);
  const docId = sessionStorage.getItem("docId");
  const [something, setSomething] = useState<Number>(0);
  //postdata helper func
  const postData = async (track: SpotifyJsonType, id: string) => {
    let something: number = 0;
    if (data.Queue === undefined) {
      setSomething(0);
    } else {
      data.Queue.map(() => (something += 1));
      setSomething(something);
    }

    const arrayData = {
      url: track.album.images[0].url, //image url
      name: track.name, //name of track
      artists: track.artists.map((artist) => artist.name).join(", "), //all artists
      index: something,
    };
    //MAKE THIS PROCESS MORE EFFICIENT
    const postData = {
      url: track.album.images[0].url, //image url
      name: track.name, //name of track
      artists: track.artists.map((artist) => artist.name).join(", "), //all artists
      videoId: id, //ytb id
    };

    try {
      const response = await fetch(`../../../../api/updateDoc/${docId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          arrayData,
          docId,
          arrayName: "Queue",
          postData,
        }),
      });
      const result = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  //post data but with the youtube id
  const random = async (track: SpotifyJsonType) => {
    const trackData = track;
    const id = await callYoutubeEmbed(
      trackData.name,
      trackData.artists[0].name
    );
    if (id) {
      try {
        const response = await postData(track, id);
        console.log(response);
      } catch (error) {
        console.log("Error", error);
        return <p>Sorry, couldn't retrieve this track</p>;
      }
    }
  };

  if (spotifyData === undefined) {
    return <div className={styles.main}>You didn't search anything yet!</div>;
  }

  return (
    <>
      <div className={styles.main}>
        {spotifyData.map((track: SpotifyJsonType) => (
          <div
            id="card"
            onClick={() => random(track)}
            className={styles.card}
            key={track.id}
          >
            <Card data={track} lastIndex={something} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResult;
