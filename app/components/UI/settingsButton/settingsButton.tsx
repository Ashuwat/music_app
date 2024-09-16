"use client";
import settingsControl from "../../../functions/jsResponsive/sidebars/settingsPage";

const SettingsButton = () => {
  sessionStorage.setItem("settingsPage", "false");
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
