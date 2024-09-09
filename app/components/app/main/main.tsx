"use client";
import React, { useEffect, useState } from "react";
import HomeWidget from "./widgets/home/homeWidget";
import styles from "./styles.module.css";
import SettingsButton from "../../UI/settingsButton/settingsButton";

const MainComp = () => {
  const [widget, setWidget] = useState<React.ReactNode>(<HomeWidget />);
  //sidebar hover effects

  return (
    <>
      <div className={styles.main}>
        <div className={styles.control}>
          <SettingsButton />
        </div>
        <div className={styles.widget}>{widget}</div>
      </div>
    </>
  );
};

export default MainComp;
