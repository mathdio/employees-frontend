import { useEffect, useState } from 'react';

import Mobile from '../components/Mobile';
import fetchEmployees from '../utils/fetchEmployees';

export default function Employees() {
  const [state, setState] = useState({
    isMobile: null,
    isLoading: true,
    windowDimensions: { width: null, height: null },
    employeesData: [],
  });

  const getWindowDimensions = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return { width, height };
  };

  const handleWindowResize = () => {
    setState((s) => ({
      ...s,
      windowDimensions: getWindowDimensions(),
    }));
  };

  useEffect(() => {
    (async () => {
      const employeesData = await fetchEmployees();
      setState((s) => ({
        ...s,
        windowDimensions: getWindowDimensions(),
        isLoading: false,
        employeesData,
      }));

      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    })();
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
      <Mobile employeesData={ state.employeesData } />
    );
  }
  return (
    <h1>Web</h1>
  );
}
