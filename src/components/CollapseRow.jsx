import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import arrowDown from '../assets/arrow-down.svg';
import arrowUp from '../assets/arrow-up.svg';

import style from '../styles/CollapseRow.module.css';

const TABLE_CELL_STYLE = style['table-cell'];
const CELL_VALUE_STYLE = style['cell-value'];

export default function CollapseRow({ employee: {
  name, image, job, admission_date: date, phone } }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapseClick = useCallback(() => {
    setIsCollapsed((collapsed) => !collapsed);
  }, []);

  return (
    <>
      <tr>
        <td className={ TABLE_CELL_STYLE }>
          <img src={ image } alt="" className={ style.photo } />
        </td>
        <td className={ TABLE_CELL_STYLE } colSpan={ 2 }>{name}</td>
        <td className={ TABLE_CELL_STYLE }>
          <input
            type="image"
            src={ isCollapsed ? arrowUp : arrowDown }
            alt={ isCollapsed ? 'arrow-up icon' : 'arrow-down icon' }
            className={ style['arrow-icon'] }
            onClick={ handleCollapseClick }
          />
        </td>
      </tr>
      {isCollapsed && (
        <>
          <tr className={ style.collapse }>
            <td colSpan={ 2 } className={ style['cell-key'] }>CARGO</td>
            <td colSpan={ 2 } className={ CELL_VALUE_STYLE }>{job}</td>
          </tr>
          <tr className={ style.collapse }>
            <td colSpan={ 2 } className={ style['cell-key'] }>DATA DE ADMISSÃO</td>
            <td colSpan={ 2 } className={ CELL_VALUE_STYLE }>
              {date}
            </td>
          </tr>
          <tr className={ style.collapse }>
            <td colSpan={ 2 } className={ style['cell-key'] }>TELEFONE</td>
            <td colSpan={ 2 } className={ CELL_VALUE_STYLE }>{phone}</td>
          </tr>
        </>
      )}
    </>
  );
}

CollapseRow.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    job: PropTypes.string,
    admission_date: PropTypes.string,
    phone: PropTypes.string,
    image: PropTypes.string,
  }),
}.isRequired;
