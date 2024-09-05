"use client";
import settingsControl from "../../../functions/jsResponsive/sidebars/settingsPage";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const SettingsButton = () => {
  const [settingsState, setSettingState] = useState(false);
  const [settingsState_1, setSettingsState_1] = useState(false);
  //settings - make this piece of code better this is terrible
  useEffect(() => {
    if (settingsState === true) {
      settingsControl(true, "settings", "settings_inner");
    } else {
      settingsControl(false, "settings", "settings_inner");
    }
  }, [settingsState_1]);

  function settingsToggle() {
    if (settingsState === true) {
      setSettingsState_1(false);
      setSettingState(false);
    } else {
      setSettingsState_1(true);
      setSettingState(true);
    }
  }

  return (
    <>
      <div>
        <button onClick={settingsToggle}>Settings</button>
      </div>
    </>
  );
};

export default SettingsButton;
