import Image from "next/image";
import loopIcon from '../../svgs/loop.svg';
import styles from './styles.module.css'

const LoopButton = () => {
  return (
    <div className={styles.main}>
      <Image
        className={styles.svg}
        src={loopIcon}
        alt="back"
        width={25}
        height={25}
      />
    </div>
  );
};

export default LoopButton;
