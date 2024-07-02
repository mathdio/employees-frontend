import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import Context from './Context';

function Provider({ children }) {
  const [employeesData, setEmployeesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const contextValue = useMemo(() => ({
    employeesData,
    setEmployeesData,
    filteredData,
    setFilteredData,
  }), [employeesData, filteredData]);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
