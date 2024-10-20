import { DataType } from "../../../types/types";
import SettingsButton from "../../UI/settingsButton/settingsButton";
import styles from "./styles.module.css";

type Data = {
  data: DataType;
};

const SettingsPage: React.FC<Data> = (
  data,
  color: [number, number, number, number]
) => {
  return (
    <>
      <div className={styles._}>
        <div className={styles.inner}>
          <pre>
            <h1>{data.data.groupCode}</h1>
            {`
            Used just for testing purposes
            Going to be filled up with profile related things
            Group Settings
            Etc.


            Have fun!
            `}
          </pre>
          <SettingsButton />
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
