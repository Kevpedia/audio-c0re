import * as React from 'react';
import Layout from '../components/layout';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <h1>About Page</h1>
      </main>
    </Layout>
  );
};

export default IndexPage;
