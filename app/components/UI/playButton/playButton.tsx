import Image from "next/image";
import playIcon from "../../svgs/play.svg";
import pauseIcon from "../../svgs/pause.svg";
import { useEffect, useState } from "react";
import {
  pauseVideoFunc,
  playVideoFunc,
} from "../../../functions/youtube/youtubeFunc";
import styles from "./styles.module.css";
import { DataType } from "../../../types/types";

const PlayButton = (play: { play: Boolean }) => {
  const [playState, setPlayState] = useState<Boolean>(true);
  const docId = sessionStorage.getItem("docId");

  const playPausePostData = async () => {
    try {
      await fetch(`../../../api/postData/${docId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          docId: docId,
          postData: {
            play: playState,
          },
        }),
      });
    } catch (error) {
      //needs better error handling than just this
      console.log(error);
    }
  };

  const playPause = async () => {
    if (playState === true) {
      setPlayState(false);
      console.log("it said false");
      pauseVideoFunc();
    } else {
      setPlayState(true);
      console.log("it said true");
      playVideoFunc();
    }
    try {
      await playPausePostData();
    } catch (error) {
      console.log("playstateError", error);
    }
  };

  return (
    <>
      <div className={styles.main} id="play" onClick={playPause}>
        {play ? (
          <Image
            // style={{ filter: "brightness(0) invert(0)" }}
            className={styles.svg}
            src={pauseIcon}
            width={30}
            height={30}
            alt="play"
          />
        ) : (
          <Image
            // style={{ filter: "brightness(0) invert(0)" }}
            className={styles.svg}
            src={playIcon}
            width={30}
            height={30}
            alt="play"
          />
        )}
      </div>
    </>
  );
};

export default PlayButton;
