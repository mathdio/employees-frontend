import PropTypes from 'prop-types';

import style from '../styles/WebRow.module.css';

const CELL_STYLE = style['table-cell'];

export default function WebRow({ employee:
  { image, name, job, admission_date: date, phone } }) {
  return (
    <tr>
      <td className={ CELL_STYLE }>
        <img src={ image } alt={ `${name}` } className={ style.photo } />
      </td>
      <td className={ CELL_STYLE }>{name}</td>
      <td className={ CELL_STYLE }>{job}</td>
      <td className={ CELL_STYLE }>{date}</td>
      <td className={ CELL_STYLE }>{phone}</td>
    </tr>
  );
}

WebRow.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    job: PropTypes.string,
    admission_date: PropTypes.string,
    phone: PropTypes.string,
    image: PropTypes.string,
  }),
}.isRequired;
