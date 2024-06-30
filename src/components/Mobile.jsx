import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Mobile({ employeesData }) {
  // useEffect(() => {
  //   console.log(employeesData);
  // }, []);

  return (
    <>
      <h1>Funcionários</h1>
      <input />
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>•</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map(({ id, name, image }) => (
            <tr key={ id }>
              <td><img src={ image } alt="" /></td>
              <td>{name}</td>
              <td>BUTTON</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
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
