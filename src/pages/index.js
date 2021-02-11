import * as React from 'react';
import Layout from '../components/layout';
import { Stack, Heading, Divider } from '@chakra-ui/react';

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
      <Stack spacing={3} p={4} as='div' centerContent>
        <Heading>Home Page</Heading>
        <Divider />
        <p>We do headphones and stuff...</p>
      </Stack>
    </Layout>
  );
};

export default IndexPage;
