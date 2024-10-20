import Image from "next/image";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const CD = ({ url, state }: { url: string; state: boolean }) => {
  const defaultUrl =
    "data:";
  const [validUrl, setValidUrl] = useState<string>(defaultUrl);

  useEffect(() => {
    if (url === "0") {
      setValidUrl(defaultUrl);
    } else {
      setValidUrl(url);
    }
  }, [url]);

  const width = 600;
  const height = 600;

  return (
    // <div className={styles.main}>
    <div className={styles.mainInner}>
      <div className={state ? styles.rotate : styles.notRotate}>
        <div>
          <div className={styles.behind}>
            <Image
              className={styles.image}
              src={validUrl}
              alt={`${url} - Image`}
              width={width}
              height={height}
            />
          </div>
        </div>
        <div className={styles.cd}>
          <Image
            className={styles.image}
            src={validUrl}
            alt={`${url} - Image`}
            width={width}
            height={height}
          />
        </div>
        <div>
          <div className={styles.overlay}></div>
        </div>
      </div>
    </div>
  );
};

export default CD;
