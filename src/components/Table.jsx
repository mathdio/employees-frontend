import { useContext } from 'react';

import arrowDown from '../assets/arrow-down.svg';
import Context from '../context/Context';

import style from '../styles/Table.module.css';

const TABLE_CELL_STYLE = style['table-cell'];
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
  );
}
