import * as React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

// markup
const LocationPage = ({ data, params }) => {
  return (
    <Layout>
      <main style={pageStyles}>
        <h1>{data.contentfulLocation.name}</h1>
        <p>It's a place, and we're there!</p>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    contentfulLocation(id: { eq: $id }) {
      slug
      id
      name
    }
  }
`;

export default LocationPage;
