import { DataType } from "../../../types/fetchedData";
import SettingsButton from "../../UI/settingsButton/settingsButton";
import styles from "./styles.module.css";

const SettingsPage: React.FC<DataType> = ({ Data }) => {
  return (
    <>
      <div className={styles._}>
        <div className={styles.inner}>
          <pre>
            <h1>{Data.groupCode}</h1>
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
          <pre>
            {`
sadfasd
fsad
fasd
fsd
af
sda
f
as
dfsa
f
sdfdsfdfdsa
                `}
          </pre>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
