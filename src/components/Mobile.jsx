import PropTypes from 'prop-types';

import arrowDown from '../assets/arrow-down.svg';
import logo from '../assets/header-logo.png';

import style from '../styles/Mobile.module.css';

const TABLE_CELL_STYLE = style['table-cell'];
const TABLE_HEADING_STYLE = style['table-heading'];

export default function Mobile({ employeesData }) {
  return (
    <div className={ style['outter-container'] }>
      <header className={ style['header-container'] }>
        <img src={ logo } alt="" className={ style['header-logo'] } />
      </header>
      <p className={ style.heading }>Funcionários</p>
      <input type="text" />
      <table className={ style['table-container'] }>
        <thead>
          <tr>
            <th className={ TABLE_HEADING_STYLE }>FOTO</th>
            <th className={ TABLE_HEADING_STYLE }>NOME</th>
            <th className={ TABLE_HEADING_STYLE }>•</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map(({ id, name, image }) => (
            <tr key={ id }>
              <td className={ TABLE_CELL_STYLE }>
                <img src={ image } alt="" className={ style.photo } />
              </td>
              <td className={ TABLE_CELL_STYLE }>{name}</td>
              <td className={ TABLE_CELL_STYLE }>
                <input
                  type="image"
                  src={ arrowDown }
                  alt=""
                  className={ style['arrow-down'] }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
