import PropTypes from 'prop-types';

export default function WebRow({ employee:
  { photo, name, job, admission_date: date, phone } }) {
  return (
    <tr>
      <td>
        <img src={ photo } alt={ `${name}` } />
      </td>
      <td>{name}</td>
      <td>{job}</td>
      <td>{date}</td>
      <td>{phone}</td>
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
