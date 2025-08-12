import { useEffect, RefObject } from 'react';

type ClickOutsideHandler = (event: MouseEvent | TouchEvent) => void;

export const useHandleClickOutside = (
  ref: RefObject<HTMLElement | null>,
  handler: ClickOutsideHandler
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const targetNode = event.target as Node | null;

      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || (targetNode && ref.current.contains(targetNode))) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
