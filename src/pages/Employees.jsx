import { useContext, useEffect, useState } from 'react';

import Mobile from '../components/Mobile';
import Web from '../components/Web';
import Context from '../context/Context';
import fetchEmployees from '../utils/fetchEmployees';

import Loading from './Loading';

const RESPONSE_OK = 200;
const LOADING_MOCK_TIMER = 500;

export default function Employees() {
  const [state, setState] = useState({
    isMobile: null,
    isLoading: true,
    windowDimensions: { width: null, height: null },
  });

  const { setEmployeesData } = useContext(Context);

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
    document.title = 'Bemobile - Funcionários Front-End';
    setTimeout(() => {
      (async () => {
        const { status, data } = await fetchEmployees();

        if (status && status === RESPONSE_OK) {
          setState((s) => ({
            ...s,
            windowDimensions: getWindowDimensions(),
            isLoading: false,
          }));

          setEmployeesData(() => data);

          window.addEventListener('resize', handleWindowResize);
          return () => window.removeEventListener('resize', handleWindowResize);
        }
      })();
    }, LOADING_MOCK_TIMER);
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
    } else if (width !== null) {
      setState((s) => ({
        ...s,
        isLoading: false,
        isMobile: false,
      }));
    }
  }, [state.isLoading, state.windowDimensions]);

  if (state.isLoading) {
    return (
      <Loading />
    );
  }

  if (state.isMobile) {
    return (
      <Mobile />
    );
  }
  return (
    <Web />
  );
}
