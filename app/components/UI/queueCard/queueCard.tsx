import callYoutubeEmbed from "../../../functions/youtube/youtubeApi";
import Image from "next/image";
import styles from "./styles.module.css";
import trash from "../../svgs/trash.svg";
import { DataType } from "../../../types/types";

type queueCard = {
  data: {
    url: string;
    name: string;
    artists: string;
    index: number;
  };
};

const QueueCard: React.FC<queueCard> = (data) => {
  //fetch youtube id from name and artists
  const fetchYoutubeId = async () => {
    try {
      const response = await callYoutubeEmbed(
        data.data.name,
        data.data.artists
      );
      if (response) {
        return response;
      } else {
        return null;
      }
    } catch (error) {
      console.log("failed to fetch youtube id", error);
    }
  };

  //post data with youtube id as arg
  const makeCurrentSong = async () => {
    try {
      const docId = sessionStorage.getItem("docId");
      const id = await fetchYoutubeId();
      const postData = {
        current: {
          name: data.data.name,
          artists: data.data.artists,
          url: data.data.url,
          videoId: id,
        },
      };
      const response = await fetch(`../../../api/postData/${docId}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          postData: postData,
          docId: docId,
        }),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <>
      <div onClick={makeCurrentSong} className={styles.main}>
        <Image
          className={styles.image}
          src={data.data.url}
          alt={`image: ${data.data.name}`}
          width={50}
          height={50}
        />
        <div
          style={{ flexDirection: "column", marginLeft: "5px", width: "90%" }}
        >
          <p className={`${styles.p} ${styles.name}`}>{data.data.name}</p>
          <p className={`${styles.p} ${styles.artists}`}>{data.data.artists}</p>
        </div>
        <div
          className={styles.trashIcon}
          // onClick={(event) => {
          //   event.stopPropagation();
          //   removeTrackFromQueue(index);
          // }}
        >
          <Image
            onClick={(e) => e.stopPropagation()}
            style={{ width: "20px" }}
            src={trash}
            alt="trash"
          />
        </div>
      </div>
    </>
  );
};

export default QueueCard;
