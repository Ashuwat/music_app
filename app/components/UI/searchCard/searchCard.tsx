import React, { use, useEffect } from "react";
import Image from "next/image";
import { DataType, SpotifyJsonType } from "../../../types/types";
import spotifyFetchSearch from "../../../functions/spotify/spotifyFetchSearch";
import styles from "./styles.module.css";
import QueueIcon from "../../svgs/queue.svg";
import explicit from "../../svgs/explicit.svg";
import trash from "../../svgs/loop.svg";
import { useRouter } from "next/navigation";

const Card = ({
  data,
  lastIndex,
}: {
  data: SpotifyJsonType;
  lastIndex: Number;
}) => {
  const arrayData = {
    name: data.name,
    url: data.album.images[0].url,
    artists: data.artists.map((artist) => artist.name).join(", "),
    index: lastIndex,
  };
  const docId = sessionStorage.getItem("docId");
  //add to the queue
  const queue = async (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    event.stopPropagation();
    try {
      const response = await fetch(`../../../api/updateDoc/${docId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ docId, arrayData, arrayName: "Queue" }),
      });
      const result = await response.json();
      console.log("result", result);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <div className={styles.card} key={data.id}>
        <div className={styles.image}>
          {/* <Image
            style={{ borderRadius: "10px" }}
            src={data.album.images[0].url}
            alt={'N/A Image'}
            width={50}
            height={50}
          /> */}
        </div>
        <div style={{ flexDirection: "column", width: "90%" }}>
          <b>{data.name}</b>
          <div>
            {data.artists.map((artist) => artist.name).join(", ")}
            {data.explicit === true && (
              <Image src={explicit} alt="explicit" width={20} height={20} />
            )}
          </div>
        </div>
        <div className={styles.queueButton}>
          <Image
            className={styles.queue}
            onClick={(e) => queue(e)}
            src={QueueIcon}
            alt="Queue"
            width={30}
            height={30}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
