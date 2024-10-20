import Image from "next/image";
import { DataType, RGB } from "../../../types/types";
import styles from "./styles.module.css";
import CD from "./cd/cd";
import { useEffect, useState } from "react";
import powerIcon from "../../svgs/power.svg";

const RecordPlayer = ({ data }: { data: DataType }) => {
  const [state, setState] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  const setStateFunc = () => {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  };

  return (
    <>
      <div className={styles.record}>
        <div>
          <CD url={data.current.url} state={state} />
        </div>
        <div className={styles.row}>
          <div className={styles.blackbox}></div>
          <button
            className={`${styles.button} ${
              state ? styles.power : styles.noPower
            }`}
            onClick={setStateFunc}
          >
            <Image
              className={styles.whitefilter}
              src={powerIcon}
              alt="Power"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default RecordPlayer;
