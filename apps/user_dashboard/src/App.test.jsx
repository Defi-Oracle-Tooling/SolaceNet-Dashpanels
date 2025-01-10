import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { expect } from 'chai';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    // ...existing code...
  });

  it('renders correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText('User Dashboard')).toBeInTheDocument();
  });

  it('has a button', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('button')).toBeInTheDocument();
  });
});

export default App;