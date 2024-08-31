// useClientSideEffect.ts
import { useEffect } from 'react';

const openCloseBar = (callback: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      callback(event);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
};

export default openCloseBar;
