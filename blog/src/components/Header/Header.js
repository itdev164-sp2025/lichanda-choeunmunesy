

const Header = ({siteTitle}) => (
  <StyledHeader>
      <StyledLink to="/">
        {siteTitle}
      </StyledLink>
  </StyledHeader>


)


Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ""
}

export { Header}