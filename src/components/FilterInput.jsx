import { useContext, useEffect, useState } from 'react';

import Context from '../context/Context';

import style from '../styles/FilterInput.module.css';

export default function FilterInput() {
  const [filterValue, setFilterValue] = useState('');
  const { employeesData, setFilteredData } = useContext(Context);

  const handleChange = () => {
    if (filterValue.length > 0) {
      return employeesData.filter(({ name, job, phone }) => (
        name.toLowerCase().includes(filterValue.toLowerCase())
        || job.toLowerCase().includes(filterValue.toLowerCase())
        || phone.includes(filterValue)));
    }
    return null;
  };

  useEffect(() => {
    setFilteredData(() => handleChange());
  }, [filterValue]);

  return (
    <input
      className={ style.input }
      type="text"
      placeholder="Pesquisar"
      value={ filterValue }
      onChange={ ({ target }) => setFilterValue(() => target.value) }
    />
  );
}
