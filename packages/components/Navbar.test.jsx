import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { expect } from 'chai';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders Navbar with items', () => {
    const items = [{ name: 'Home' }, { name: 'About' }, { name: 'Contact' }];
    render(<Navbar items={items} onItemClick={() => {}} />);
    items.forEach(item => {
      const navItem = screen.getByText(item.name);
      expect(navItem).to.exist;
    });
  });

  it('calls onItemClick when an item is clicked', () => {
    const items = [{ name: 'Home' }, { name: 'About' }];
    const onItemClick = vi.fn();
    const { getByText } = render(<Navbar items={items} onItemClick={onItemClick} />);
    fireEvent.click(getByText('Home'));
    expect(onItemClick).to.have.been.called;
  });
});
