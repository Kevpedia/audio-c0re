import * as React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import { Stack, Heading, Divider } from '@chakra-ui/react';
import SEO from '../../components/seo';

// markup
const LocationPage = ({ data, params }) => {
  return (
    <Layout>
      <SEO title={data.contentfulLocation.name} />
      <Stack spacing={3} p={4} as='div' centerContent>
        <Heading>{data.contentfulLocation.name}</Heading>
        <Divider />
        {data.contentfulLocation.skylineImage && (
          <img
            src={data.contentfulLocation.skylineImage.file.url}
            alt={data.contentfulLocation.skylineImage.description}
          />
        )}
        <p>It's a place, and we're there!</p>
      </Stack>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    contentfulLocation(id: { eq: $id }) {
      slug
      id
      name
      skylineImage {
        id
        title
        description
        file {
          url
        }
      }
    }
  }
`;

export default LocationPage;
