import EmployeesHeading from './EmployeesHeading';
import FilterInput from './FilterInput';
import Header from './Header';
import Table from './Table';

import style from '../styles/Web.module.css';

export default function Web() {
  return (
    <>
      <Header />
      <form className={ style['form-container'] }>
        <EmployeesHeading />
        <FilterInput />
      </form>
      <Table />
    </>

  );
}
