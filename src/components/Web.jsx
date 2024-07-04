import EmployeesHeading from './EmployeesHeading';
import FilterInput from './FilterInput';
import Header from './Header';
import WebTable from './WebTable';

import style from '../styles/Web.module.css';

export default function Web() {
  return (
    <>
      <Header />
      <main className={ style['main-container'] }>
        <form className={ style['form-container'] }>
          <EmployeesHeading />
          <FilterInput />
        </form>
        <WebTable />
      </main>
    </>

  );
}
