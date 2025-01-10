import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { expect } from 'chai';
import Button from './Button';

describe('Button Component', () => {
  it('renders Button with label', () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).to.exist;
  });

  it('calls onClick when button is clicked', () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button label="Click Me" onClick={onClick} />);
    fireEvent.click(getByText('Click Me'));
    expect(onClick).toHaveBeenCalled();
  });
});
