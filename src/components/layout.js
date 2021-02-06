import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Container, Button, ButtonGroup } from '@chakra-ui/react';

const headerLinksStyle = {
  margin: `1rem`,
  height: `48px`,
};

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
      className='header-container'>
      <title>{siteTitle}</title>
      <ButtonGroup variant='solid' colorScheme='teal'>
        <Link style={headerLinksStyle} to='/'>
          <Button>Home</Button>
        </Link>
        <Link style={headerLinksStyle} to='/about'>
          <Button>About Us</Button>
        </Link>
        <Link style={headerLinksStyle} to='/locations'>
          <Button>Locations</Button>
        </Link>
      </ButtonGroup>
    </div>
  </header>
);

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site: site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        {console.log(data)}
        {/* <div
          className='layout-body'
          style={{
            maxWidth: `968px`,
            margin: `0 auto`,
          }}> */}
        <Container maxW='xl' centerContent>
          <main>{children}</main>
        </Container>
        <br />
        {/* </div> */}
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
