import { useEffect } from 'react';

const useOnOutsideClick = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const { current: elem } = ref;

    function handleClick(e: Event) {
      // If the target is within component, return.
      if (!elem || elem.contains(e.target as Node)) {
        return;
      }

      callback();
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOnOutsideClick;
