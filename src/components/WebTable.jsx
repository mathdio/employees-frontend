import WebRow from './WebRow';

export default function WebTable() {
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
