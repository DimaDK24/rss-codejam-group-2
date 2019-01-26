import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './header.css';

const Header = ({ home, authors, ...props }) => (
  <header {...props}>
    <div className="nav-header">
      <Link className="nav-header__item" to="/">
        {home}
      </Link>
      <Link className="nav-header__item" to="/authors/">
        {authors}
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  home: PropTypes.node.isRequired,
  authors: PropTypes.node.isRequired,
};

export default Header;