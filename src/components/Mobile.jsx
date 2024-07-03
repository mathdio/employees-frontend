import PropTypes from 'prop-types';

import FilterInput from './FilterInput';
import Header from './Header';
import Table from './Table';

import style from '../styles/Mobile.module.css';

export default function Mobile() {
  return (
    <>
      <Header />
      <h4 className={ style.heading }>Funcionários</h4>
      <FilterInput />
      <Table />
    </>
  );
}

Mobile.propTypes = {
  employeesData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    job: PropTypes.string,
    admission_date: PropTypes.string,
    phone: PropTypes.string,
    image: PropTypes.string,
  })),
}.isRequired;
