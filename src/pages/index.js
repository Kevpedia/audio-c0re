import * as React from 'react';
import Layout from '../components/layout';
import { Stack, Heading, Divider } from '@chakra-ui/react';
import SEO from '../components/seo';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' titleTemplate='%s | Audio-C0re Headphone Rentals' />
      <Stack spacing={3} p={4} as='div' centerContent>
        <Heading>Home Page</Heading>
        <Divider />
        <p>We do headphones and stuff...</p>
      </Stack>
    </Layout>
  );
};

export default IndexPage;
