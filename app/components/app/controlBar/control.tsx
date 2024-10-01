import { ReactNode, useState } from "react";
import styles from "./styles.module.css";
import HomeWidget from "../main/widgets/home/homeWidget";
import PlayWidget from "../main/widgets/play/playWidget";
import Search from "./search/search";
import SettingsButton from "../../UI/settingsButton/settingsButton";
import { DataType } from "../../../types/types";

const ControlBar = (data: { data: DataType }) => {
  const [widget, setWidget] = useState<React.ReactNode>(
    <HomeWidget data={data.data} />
  );
  return (
    <>
      <div className={styles.control}>
        <div className={styles.center25}>
          <p>first 25%</p>
        </div>
        <div className={styles.center50}>
          <Search data={data.data} />
        </div>
        <div className={styles.center25}>
          <SettingsButton />
        </div>
      </div>
    </>
  );
};

export default ControlBar;
