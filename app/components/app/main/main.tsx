"use client";
import React, { useEffect, useState } from "react";
import HomeWidget from "./widgets/home/homeWidget";
import styles from "./styles.module.css";
import SettingsButton from "../../UI/settingsButton/settingsButton";
import { DataType } from "../../../types/types";
import Search from "../search/search/search";

type data = {
  data: DataType;
};

const MainComp: React.FC<data> = (data) => {
  const [widget, setWidget] = useState<React.ReactNode>(
    <HomeWidget data={data.data} />
  );

  return (
    <>
      <div className={styles.main}>
        <div className={styles.control}>
          <div className={styles.center25}></div>
          <div className={styles.center50}>
            <Search />
          </div>
          <div className={styles.center25}>
            <SettingsButton />
          </div>
        </div>
        <div className={styles.widget}>{widget}</div>
      </div>
    </>
  );
};

export default MainComp;
