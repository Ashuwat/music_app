"use client";
import settingsControl from "../../../functions/jsResponsive/sidebars/settingsPage";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

sessionStorage.setItem("settingsPage", "false");

const SettingsButton = () => {
  function settingsToggle() {
    const state = sessionStorage.getItem("settingsPage");
    if (state === "true") {
      sessionStorage.setItem("settingsPage", "false");
      settingsControl(false, "settings", "settings_inner");
    } else {
      sessionStorage.setItem("settingsPage", "true");
      settingsControl(true, "settings", "settings_inner");
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
