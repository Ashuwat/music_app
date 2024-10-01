// useClientSideEffect.ts
import { useEffect } from 'react';

export const isInputOrTextFocused = () => {
  const activeElement = document.activeElement;
  return (
    activeElement instanceof HTMLInputElement ||
    activeElement instanceof HTMLTextAreaElement
  );
};

const KeyboardEvent = (callback: (event: KeyboardEvent) => void) => {
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

export default KeyboardEvent;
