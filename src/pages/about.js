import * as React from 'react';
import Layout from '../components/layout';
import { Stack, Heading, Divider } from '@chakra-ui/react';
import SEO from '../components/seo';

// markup
const AboutPage = () => {
  return (
    <Layout>
      <SEO title='About Us' />
      <Stack as='div' spacing={3} p={4} centerContent>
        <Heading>About Page</Heading>
        <Divider />
        <p>about us? we're awesome! 'nuf said...</p>
      </Stack>
    </Layout>
  );
};

export default AboutPage;
