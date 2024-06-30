import { useEffect, useState } from 'react';

import Mobile from './pages/Mobile';

function App() {
  const [state, setState] = useState({
    isMobile: null,
    isLoading: true,
    windowDimensions: { width: null, height: null },
  });

  const getWindowDimensions = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return { width, height };
  };

  const handleWindowResize = () => {
    setState({
      ...state,
      windowDimensions: getWindowDimensions(),
    });
  };

  useEffect(() => {
    const dimensions = getWindowDimensions();
    setState((s) => ({
      ...s,
      windowDimensions: dimensions,
      isLoading: false,
    }));

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    const LARGE_DEVICE_WIDTH = 992;
    const { width } = state.windowDimensions;

    if (width !== null && width < LARGE_DEVICE_WIDTH) {
      setState((s) => ({
        ...s,
        isLoading: false,
        isMobile: true,
      }));
    } else {
      setState((s) => ({
        ...s,
        isLoading: false,
        isMobile: false,
      }));
    }
  }, [state.isLoading, state.windowDimensions]);

  if (state.isLoading) {
    return (
      <h1 style={ { color: 'red' } }>Loading</h1>
    );
  }

  if (state.isMobile) {
    return (
      <Mobile />
    );
  }
  return (
    <h1>Web</h1>
  );
}

export default App;
