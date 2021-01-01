import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

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
      <div>
        <Link style={headerLinksStyle} to='/'>
          Home
        </Link>
        <Link style={headerLinksStyle} to='/about'>
          About Us
        </Link>
        <Link style={headerLinksStyle} to='/locations'>
          Locations
        </Link>
      </div>
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
        <div
          className='layout-body'
          style={{
            maxWidth: `968px`,
            margin: `0 auto`,
          }}>
          <main>{children}</main>
          <br />
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
