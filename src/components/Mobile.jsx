import PropTypes from 'prop-types';

import logo from '../assets/header-logo.png';

import Table from './Table';

import style from '../styles/Mobile.module.css';

export default function Mobile() {
  return (
    <div className={ style['outter-container'] }>
      <header className={ style['header-container'] }>
        <img src={ logo } alt="" className={ style['header-logo'] } />
      </header>
      <p className={ style.heading }>Funcionários</p>
      <input type="text" />
      <Table />
    </div>
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
