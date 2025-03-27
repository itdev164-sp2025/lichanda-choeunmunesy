import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';  

const StyledHeader = styled.header`
  background: #f8f8f8;
  padding: 10px 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1.5rem;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledLink to="/">{siteTitle}</StyledLink>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export { Header };