"use client";
import KeyboardEvent, {
  isInputOrTextFocused,
} from "../../../functions/keyboardHotkey";
import { getMaxDuration } from "../../../functions/youtube/youtubeFunc";
import { DataType } from "../../../types/types";
import BackButton from "../../UI/backButton/backButton";
import LoopButton from "../../UI/loopButton/loopButton";
import Something from "../../UI/loopButton/loopButton";
import MusicSlider from "../../UI/musicSlider/musicSlider";
import PlayButton from "../../UI/playButton/playButton";
import SkipButton from "../../UI/skipButton/skipButton";
import styles from "./styles.module.css";
import { useState } from "react";

const TaskBar = ({ data }: { data: DataType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDuration, setCurrentDuration] = useState(0);

  const moveEntire = () => {
    // console.log("button clicked");
    setIsOpen((prev) => !prev);
  };

  KeyboardEvent((event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "s" && !isInputOrTextFocused()) {
      event.preventDefault();
      moveEntire();
    }
  });

  const getDuration = () => {
    const something = getMaxDuration();
    if (something) {
      const rainbow = Math.floor(something);
      setCurrentDuration(rainbow);
      console.log(rainbow);
    } else {
      console.log(0);
      return 0;
    }
  };

  return (
    <>
      <div
        id="taskbar"
        className={`${styles.entire} ${isOpen ? styles.open : ""}`}
      >
        <button onClick={moveEntire}>asdf</button>
        <div className={styles.taskbar}>
          <div className={styles.percent25}>
            <MusicSlider play={data.play}/>
          </div>
          <div className={styles.percent50}>
            <div className={styles.playBar}>
              <LoopButton />
              <BackButton data={data} />
              <PlayButton play={data.play}/>
              <SkipButton data={data} />
              <LoopButton />
            </div>
          </div>
          <div className={styles.percent25}>
            <button onClick={getDuration}>Get Duration of Songe</button>
            <p>{`${Math.floor(currentDuration/60)}: ${currentDuration%60} sec`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskBar;
