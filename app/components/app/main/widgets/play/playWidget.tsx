import React, { useEffect, useState } from "react";
import callYoutubeEmbed from "../../../../../functions/youtube/youtubeApi";
import styles from "./styles.module.css";
import Image from "next/image";
import { DataType } from "../../../../../types/types";
import Queue from "../../../sidebar/queue/queue";
import RecordPlayer from "../../../../UI/recordPlayer/recordPlayer";
import "../../../../../globals.css";
const PlayWidget = (data: { data: DataType }) => {
  const [videoId, setVideoId] = useState<string>();
  const [url, setUrl] = useState<string>();
  const somethingTest = (
    <div className={styles.recommendInner}>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
  return (
    <>
      <div className={`${styles.main}`}>
        <div className="row">
          <div className="column">
            <div className={styles.cd}>
              <RecordPlayer data={data.data} />
            </div>

            <div className={styles.description}>
              <div className={styles.descriptionInner}>
                <h1 className={styles.h1}>{data.data.current.name}</h1>
                <h3 className={styles.artists}>{data.data.current.artists}</h3>
                <p>
                  {`This is a some extra stuff that you might need to put in the description of the song, I'm not exactly what to put in here at all, but it's here for something.`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.recommend}>
          <div className={styles.recommendTop}></div>
          {somethingTest}
        </div>
      </div>
    </>
  );
};

export default PlayWidget;
