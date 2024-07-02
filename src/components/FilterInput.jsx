import { useContext, useEffect, useState } from 'react';

import Context from '../context/Context';

export default function FilterInput() {
  const [filterValue, setFilterValue] = useState('');
  const { employeesData, setFilteredData } = useContext(Context);

  const handleChange = () => {
    return employeesData.filter(({ name, job, phone }) => (
      name.toLowerCase().includes(filterValue.toLowerCase())
      || job.toLowerCase().includes(filterValue.toLowerCase())
      || phone.includes(filterValue)));
  };

  useEffect(() => {
    setFilteredData(() => handleChange());
  }, [filterValue]);

  return (
    <input
      type="text"
      value={ filterValue }
      onChange={ ({ target }) => setFilterValue(() => target.value) }
    />
  );
}
