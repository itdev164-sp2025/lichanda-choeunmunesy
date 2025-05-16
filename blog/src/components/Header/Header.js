import * as  React from 'react';
import PropTypes from 'prop-types';
import styled , { ThemeConsumer } from 'styled-components';
import { Flex } from 'rebass';
import { Link } from 'gatsby';  
import { H1 } from "../Heading"
import { Section } from '../Section'
import { SearchButton } from '../Button';

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.variants.header.primary.backgroundColor};
`;

const StyledLink = styled(Link)`
  margin : 0 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.variants.header.primary.color};
`;

const Image = styled.img `
margin: 0;
`
const Nav = styled(Flex) `
flex-direction: row;
justify-content: flex-end;
align-items: center;
`
const Title = styled(H1)`
flex: 4;
`

const MediaQuery = styled.div`
@media (max-width: 600px) {
  display: none;
}
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Section flex>
      <Section width={1/12}
         flexDirection="column" justifyContent="center">
          <ThemeConsumer>
            {theme => <Image src={theme.images.mainHeaderImage} />}
          </ThemeConsumer>
      </Section>
      <Section width={11/12}
        flexDirection="column" justifyContent="center">
          <Nav>
            <Title>
              <StyledLink to="/">
                {siteTitle}
              </StyledLink>
            </Title>
            <MediaQuery>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink to="/contact">Contact</StyledLink>
            </MediaQuery>
            <SearchButton variant='contrast' />
          </Nav>
      </Section>
    </Section>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export { Header };
