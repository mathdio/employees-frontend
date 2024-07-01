import { useContext } from 'react';

import Context from '../context/Context';

import CollapseRow from './CollapseRow';

import style from '../styles/Table.module.css';

const TABLE_HEADING_STYLE = style['table-heading'];

export default function Table() {
  const { employeesData } = useContext(Context);

  return (
    <table className={ style['table-container'] }>
      <thead>
        <tr>
          <th className={ TABLE_HEADING_STYLE }>FOTO</th>
          <th className={ TABLE_HEADING_STYLE }>NOME</th>
          <th className={ TABLE_HEADING_STYLE }>•</th>
        </tr>
      </thead>
      <tbody>
        {employeesData.map((employee) => (
          <CollapseRow key={ employee.id } employee={ employee } />
        ))}
      </tbody>
    </table>
  );
}
