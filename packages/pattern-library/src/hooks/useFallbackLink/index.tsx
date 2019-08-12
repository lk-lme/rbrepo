import React, { useEffect } from 'react';

const ignoredTagNames = ['INPUT', 'BUTTON', 'ANCHOR'];

const useFallbackLink = (ref: React.RefObject<HTMLElement>, link: string, callback: () => void) => {
  useEffect(() => {
    const { current: elem } = ref;

    if (!elem) return;

    /**
     * Navigate to the fallback link.
     * This will need to be changed to match a routing solution.
     */
    function navigate(link: string) {
      window.location.href = link;
    }
    
    /**
     * Handle the click event on the parent element.
     */
    function handleClick(e: Event) {
      // Exclude certain children, e.g. 'interactive' ones.
      if (ignoredTagNames.includes((e.target as HTMLElement).tagName)) return;
      e.preventDefault();
      navigate(link);
    }

    elem.addEventListener('click', handleClick);

    return () => {
      elem.removeEventListener('click', handleClick);
    };
  });
};

export default useFallbackLink;
