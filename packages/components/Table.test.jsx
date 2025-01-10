import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expect } from 'chai';
import Table from './Table';

describe('Table Component', () => {
  it('renders table with correct headers and data', () => {
    const columns = [
      { header: 'Name', accessor: 'name' },
      { header: 'Age', accessor: 'age' }
    ];
    const data = [
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 }
    ];
    render(<Table columns={columns} data={data} />);
    columns.forEach(column => {
      const headerElement = screen.getByText(column.header);
      expect(headerElement).to.exist;
    });
    data.forEach(row => {
      const nameElement = screen.getByText(row.name);
      const ageElement = screen.getByText(row.age.toString());
      expect(nameElement).to.exist;
      expect(ageElement).to.exist;
    });
  });
});
