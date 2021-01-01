import * as React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main style={pageStyles}>
        <h1>Locations</h1>
        <ul>
          {data.allContentfulLocation.nodes.map((location) => {
            return (
              <li id={location.id}>
                <Link to={`/locations/${location.slug}`}>{location.name}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query LocationPagesQuery {
    allContentfulLocation {
      nodes {
        name
        slug
        id
      }
    }
  }
`;

export default IndexPage;
