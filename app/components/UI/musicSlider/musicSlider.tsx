import { useState } from "react";

const MusicSlider = (play: {play: boolean}) => {
  const [time, setTime] = useState<number>(0);
  function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setTime(Number(event.target.value));
  }
  
  //helper function to post data to firestore

  return (
    <div>
      <input
        onChange={changeInput}
        value={time}
        id="scrubber"
        type="range"
        maxLength={40}
        minLength={0}
      />
    </div>
  );
};

export default MusicSlider;
