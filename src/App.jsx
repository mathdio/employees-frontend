import { useEffect, useState } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [windowDimensions, setWindowDimensions] = useState({ width: null, height: null });

  const getWindowDimensions = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return { width, height };
  };

  const handleWindowResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    const LARGE_DEVICE_WIDTH = 992;

    if (windowDimensions.width < LARGE_DEVICE_WIDTH) {
      setIsLoading(false);
      setIsMobile(true);
    } else {
      setIsLoading(false);
      setIsMobile(false);
    }
  }, [windowDimensions]);

  if (isLoading) {
    return (
      <h1 style={ { color: 'red' } }>Loading</h1>
    );
  }

  if (isMobile) {
    return (
      <h1 style={ { color: 'blue' } }>Mobile</h1>
    );
  }
  return (
    <h1>Web</h1>
  );
}

export default App;
