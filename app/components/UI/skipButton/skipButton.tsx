import Image from "next/image";
import skipIcon from "../../svgs/skip.svg";
import styles from "./styles.module.css";
import { DataType } from "../../../types/types";
import { useEffect, useState } from "react";
import callYoutubeEmbed from "../../../functions/youtube/youtubeApi";

type Queue = {
  url: string;
  name: string;
  artists: string;
  index: number;
}[];

const SkipButton = ({ data }: { data: DataType }) => {
  const [queue, setQueue] = useState<Queue>([]);
  const docId = sessionStorage.getItem("docId");

  useEffect(() => {
    setQueue(data.Queue);
  }, [data.Queue]);

  //finds the next song in the queue
  const getNextHelper = () => {
    if (data.Queue) {
      const currentQueue = data.Queue;
      const currentData =
        data.current.name + data.current.artists + data.current.url; //name + artists + url
      // console.log(currentData);
      for (let i = 0; i < currentQueue.length + 1; i++) {
        const selectedQueueSong =
          data.Queue[i].name + data.Queue[i].artists + data.Queue[i].url;
        // console.log(selectedQueueSong);
        if (currentData === selectedQueueSong) {
          if (i > data.Queue.length + 1) {
            return;
          }
          return i + 1;
        }
      }
    } else {
      console.log(`didn't work`);
      return;
    }
  };

  const getVideoId = async (i: number) => {
    if (data.Queue[i] !== undefined) {
      try {
        const response = await callYoutubeEmbed(
          data.Queue[i].name,
          data.Queue[i].artists
        );
        return response;
      } catch (error) {
        console.log("getVideoId\n\n", error);
      }
    }
  };

  const getNext = async () => {
    try {
      const i = getNextHelper();
      if (i) {
        const videoId = await getVideoId(i);
        if (videoId) {
          const response = await fetch(`../../../api/postData/${docId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              docId: docId,
              postData: {
                current: {
                  url: data.Queue[i].url,
                  name: data.Queue[i].name,
                  artists: data.Queue[i].artists,
                  videoId: videoId,
                },
              },
            }),
          });
          const result = await response.json();
          console.log(result);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div onClick={getNext} className={styles.main}>
      <Image
        className={styles.svg}
        src={skipIcon}
        alt="skip"
        width={30}
        height={30}
      />
    </div>
  );
};

export default SkipButton;
