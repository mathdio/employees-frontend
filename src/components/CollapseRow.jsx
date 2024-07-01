import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import arrowDown from '../assets/arrow-down.svg';

import style from '../styles/CollapseRow.module.css';

const TABLE_CELL_STYLE = style['table-cell'];
const COLLAPSE_CELL_STYLE = style.collapse;

export default function CollapseRow({ employee: {
  name, image, job, admission_date, phone } }) {
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
        <td className={ TABLE_CELL_STYLE }>{name}</td>
        <td className={ TABLE_CELL_STYLE }>
          <input
            type="image"
            src={ arrowDown }
            alt=""
            className={ style['arrow-down'] }
            onClick={ handleCollapseClick }
          />
        </td>
      </tr>
      {isCollapsed && (
        <tr
          className={ style.collapse }
        >
          <td className={ COLLAPSE_CELL_STYLE }>{job}</td>
          <td className={ COLLAPSE_CELL_STYLE }>
            {admission_date}
          </td>
          <td className={ COLLAPSE_CELL_STYLE }>{phone}</td>
        </tr>
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
