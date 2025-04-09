import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';  
import { H1 } from "../Heading"
import { Section } from '../Section'
import { IconButton } from '../Button'
import { Search } from 'styled-icons/feather'

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: ${({ theme }) => theme.variants.header.primary.backgroundColor};
`;

const StyledLink = styled(Link)`
  font-size: var(--font-sm);
  text-decoration: none;
  color: ${({ theme }) => theme.variants.header.primary.color};
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Section width={11/12}>
      <StyledLink to="/">
        <H1>{siteTitle}</H1>
      </StyledLink>
    </Section>
    <Section width={1/12}>
      <IconButton icon={<Search />} variant="contrast" />
    </Section>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export { Header };
