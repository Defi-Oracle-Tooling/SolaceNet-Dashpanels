import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ columns, data }) => (
  <table>
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th key={index}>{column.header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((column, colIndex) => (
            <td key={colIndex}>{row[column.accessor]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
