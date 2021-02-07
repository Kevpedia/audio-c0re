import * as React from 'react';
import Layout from '../components/layout';
import { Box } from '@chakra-ui/react';

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
      <Box as='div'>
        <h1>Home Page</h1>
        <p>We do headphones and stuff...</p>
      </Box>
    </Layout>
  );
};

export default IndexPage;
