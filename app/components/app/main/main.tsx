import React, { useEffect, useState } from "react";
import HomeWidget from "./widgets/home/homeWidget";
import styles from "./styles.module.css";
import {
  hoverOver,
  sidebarHover,
} from "@/app/functions/jsResponsive/sidebars/hoverOver";
import SettingsPage from "../settings/settings";
import settingsPage from "@/app/functions/jsResponsive/sidebars/settingsPage";
import settingsControl from "@/app/functions/jsResponsive/sidebars/settingsPage";

const MainComp = () => {
  const [widget, setWidget] = useState<React.ReactNode>(<HomeWidget />);
  const [settingsState, setSettingsState] = useState(false);
  const [settingsState_1, setSettingsState_1] = useState(false);
  //testing purposes
  const [num, setNum] = useState(0);

  //settings - make this piece of code better this is terrible
  useEffect(() => {
    if (settingsState === true) {
      settingsControl(true);
    } else {
      settingsControl(false);
    }
  }, [settingsState_1]);

  function settingsToggle() {
    if (settingsState === true) {
      setSettingsState_1(false);
      setSettingsState(false);
    } else {
      setSettingsState_1(true);
      setSettingsState(true);
    }
  }

  //sidebar hover effects
  useEffect(() => {
    sidebarHover();
    hoverOver();

    setNum(num + 1);
    console.log("number of times sidebarhover is being called", num);
  }, [document.onmousemove]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.control}>
          <button onClick={settingsToggle}>open settings</button>
        </div>
        <div className={styles.widget}>{widget}</div>
      </div>
    </>
  );
};

export default MainComp;
