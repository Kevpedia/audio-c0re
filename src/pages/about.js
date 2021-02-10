import * as React from 'react';
import Layout from '../components/layout';
import { Box } from '@chakra-ui/react';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Box as='div'>
        <h1>About Page</h1>
        <p>about us? we're awesome! 'nuf said...</p>
      </Box>
    </Layout>
  );
};

export default IndexPage;
