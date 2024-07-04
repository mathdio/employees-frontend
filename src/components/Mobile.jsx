import PropTypes from 'prop-types';

import EmployeesHeading from './EmployeesHeading';
import FilterInput from './FilterInput';
import Header from './Header';
import Table from './Table';

import style from '../styles/Mobile.module.css';

export default function Mobile() {
  return (
    <>
      <Header />
      <main className={ style['main-container'] }>
        <EmployeesHeading />
        <FilterInput />
        <Table />
      </main>
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
