import { DataType } from "../../../types/types";
import SettingsButton from "../../UI/settingsButton/settingsButton";
import styles from "./styles.module.css";

type Data = {
  data: DataType;
};

const SettingsPage: React.FC<Data> = (data) => {
  return (
    <>
      <div className={styles._}>
        <div className={styles.inner}>
          <pre>
            <h1>{data.data.groupCode}</h1>
            {`asdkjlfhas
fasd
fasdf
sadf
sdaf
sad
fsa
afdsjlkfsadf
sdajlkfkhlkasdf
asdfsdafasdf
asdfsdafasdfsdafsadfasd
fsadfsdaf
dsafsadfsadf
sadfdasf
asdfsdafasdf
asdf
asdfsdafasdfsdafsadfasd
asdfsdafasdfsdafsadfasd
async function asdf`}
          </pre>
          <SettingsButton />
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
