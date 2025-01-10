import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { expect } from 'chai';
import Modal from './Modal';

describe('Modal Component', () => {
  it('renders Modal when isOpen is true', () => {
    render(<Modal isOpen={true} title="Test Modal" onClose={() => {}}>
      Modal Content
    </Modal>);
    const modalElement = screen.getByRole('dialog');
    expect(modalElement).to.exist;
  });

  it('does not render Modal when isOpen is false', () => {
    render(<Modal isOpen={false} title="Test Modal" onClose={() => {}}>
      Modal Content
    </Modal>);
    const modalElement = screen.queryByRole('dialog');
    expect(modalElement).to.not.exist;
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    const { getByText } = render(
      <Modal isOpen={true} title="Test Modal" onClose={onClose}>
        Modal Content
      </Modal>
    );
    fireEvent.click(getByText((content, element) => element.tagName.toLowerCase() === 'span' && content === '×'));
    expect(onClose).toHaveBeenCalled();
  });
});
