import PropTypes from 'prop-types';

import EmployeesHeading from './EmployeesHeading';
import FilterInput from './FilterInput';
import Header from './Header';
import Table from './Table';

export default function Mobile() {
  return (
    <>
      <Header />
      <EmployeesHeading />
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
