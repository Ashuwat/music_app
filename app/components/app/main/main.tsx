"use client";
import React, { useEffect, useState } from "react";
import HomeWidget from "./widgets/home/homeWidget";
import styles from "./styles.module.css";
import SettingsButton from "../../UI/settingsButton/settingsButton";
import { DataType } from "../../../types/types";
import Search from "../controlBar/search/search";
import PlayWidget from "./widgets/play/playWidget";
import ControlBar from "../controlBar/control";
import { sidebarHover } from "../../../functions/jsResponsive/sidebars/hoverOver";
import QueueCard from "../../UI/queueCard/queueCard";
import { useFormState } from "react-dom";

const MainComp = (data: { data: DataType }) => {
  const [sidebarState, setSidebarState] = useState<boolean>(false);
  const [widget, setWidget] = useState<React.ReactNode>(
    <HomeWidget data={data.data} />
  );

  const changeSidebarState = () => {
    if (sidebarState === false) {
      setSidebarState(true);
    } else {
      setSidebarState(false);
    }
  };

  useEffect(() => {
    if (widget === <HomeWidget data={data.data} />) {
      setWidget(<HomeWidget data={data.data} />);
    } else {
      setWidget(<PlayWidget data={data.data} />);
    }
  }, [data.data]);

  return (
    <>
      <div className={styles.main}>
        <ControlBar data={data.data} />
        <div className={styles.widget}>
          <div className={styles.small_strip}>
            <button onClick={() => setWidget(<HomeWidget data={data.data} />)}>
              Homewidget
            </button>
            <button onClick={() => setWidget(<PlayWidget data={data.data} />)}>
              PlayWidget
            </button>
          </div>
          {widget}
        </div>
      </div>
    </>
  );
};

export default MainComp;
