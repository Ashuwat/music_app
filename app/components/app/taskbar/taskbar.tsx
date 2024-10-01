"use client";
import KeyboardEvent, {
  isInputOrTextFocused,
} from "../../../functions/keyboardHotkey";
import styles from "./styles.module.css";
import { useState } from "react";

const TaskBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <div
        id="taskbar"
        className={`${styles.entire} ${isOpen ? styles.open : ""}`}
      >
        <button onClick={moveEntire}>asdf</button>
        <div className={styles.taskbar} style={{ background: "black" }}>
          asdf
        </div>
      </div>
    </>
  );
};

export default TaskBar;
