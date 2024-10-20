import Image from "next/image";
import playIcon from "../../svgs/play.svg";
import pauseIcon from "../../svgs/pause.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  pauseVideoFunc,
  playVideoFunc,
} from "../../../functions/youtube/youtubeFunc";
import styles from './styles.module.css'

const PlayButton = () => {
  const [playState, setPlayState] = useState<Boolean>(true);
  const docId = sessionStorage.getItem("docId");

  const playPausePostData = async () => {
    try {
      const response = await fetch(`../../../api/postData/${docId}`, {
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
      //needs better error handling than this man
      console.log(error);
    }
  };

  const playPause = async () => {
    if (playState === true) {
      setPlayState(false);
    } else {
      setPlayState(true);
    }
    try {
      await playPausePostData();
    } catch (error) {
      console.log("idk");
    }
  };

  useEffect(() => {
    if (playState === true) {
      playVideoFunc();
    } else {
      pauseVideoFunc();
    }
  }, [playState]);
  
  return (
    <>
      <div
        className={styles.main}
        id="play"
        onClick={playPause}
      >
        {playState ? (
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
