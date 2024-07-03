import { useContext } from 'react';

import ellipse from '../assets/ellipse.svg';
import Context from '../context/Context';

import CollapseRow from './CollapseRow';

import style from '../styles/Table.module.css';

const TABLE_HEADING_STYLE = style['table-heading'];

export default function Table() {
  const { employeesData, filteredData } = useContext(Context);

  return (
    <table className={ style['table-container'] }>
      <thead>
        <tr>
          <th className={ TABLE_HEADING_STYLE }>FOTO</th>
          <th className={ TABLE_HEADING_STYLE } colSpan={ 2 }>NOME</th>
          <th className={ TABLE_HEADING_STYLE }>
            <img src={ ellipse } alt="ellipse icon" className={ style['ellipse-icon'] } />
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredData ? (filteredData.map((employee) => (
          <CollapseRow key={ employee.id } employee={ employee } />
        ))) : (employeesData.map((employee) => (
          <CollapseRow key={ employee.id } employee={ employee } />
        ))) }
      </tbody>
    </table>
  );
}
