import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    const addListener = media.addEventListener
      ? () => media.addEventListener('change', listener)
      : () => media.addListener(listener); // we need to keep this, even though it's deprecated, because Safari breaks when using addEventListener

    addListener();

    // we need to keep this, even though it's deprecated, because Safari breaks when using addEventListener
    return () => {
      const removeListener = media.removeEventListener
        ? () => media.removeEventListener('change', listener)
        : () => media.removeListener(listener);
      removeListener();
    };
  }, [matches, query]);

  return matches;
}