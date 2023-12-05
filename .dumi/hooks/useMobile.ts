import { useState, useEffect } from 'react';
import { isMobile as isMobileDevice } from 'react-device-detect';

export const useMobile = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.availWidth);

  const isMobileScreen = screenWidth < 900;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.screen.availWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth, setScreenWidth]);

  const isMobile = isMobileDevice && isMobileScreen;

  return { isMobile };
};
