import { useContext } from 'react';

import Context from '../context/Context';

import WebRow from './WebRow';

import style from '../styles/WebTable.module.css';

const TABLE_HEADING_STYLE = style['table-heading'];

export default function WebTable() {
  const { employeesData, filteredData } = useContext(Context);
  return (
    <table className={ style['table-container'] }>
      <thead>
        <tr>
          <th className={ TABLE_HEADING_STYLE }>FOTO</th>
          <th className={ TABLE_HEADING_STYLE }>NOME</th>
          <th className={ TABLE_HEADING_STYLE }>CARGO</th>
          <th className={ TABLE_HEADING_STYLE }>DATA DE ADMISSÃO</th>
          <th className={ TABLE_HEADING_STYLE }>TELEFONE</th>
        </tr>
      </thead>
      <tbody>
        {filteredData ? (filteredData.map((employee) => (
          <WebRow key={ employee.id } employee={ employee } />
        ))) : (employeesData.map((employee) => (
          <WebRow key={ employee.id } employee={ employee } />
        ))) }
      </tbody>
    </table>
  );
}
