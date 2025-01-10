import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ items, onItemClick }) => {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => onItemClick(item)}>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default Navbar;
