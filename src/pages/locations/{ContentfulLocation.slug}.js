import * as React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import { Stack, Heading, Divider, Box } from '@chakra-ui/react';
import SEO from '../../components/seo';
import { GatsbyImage } from 'gatsby-plugin-image';

export const query = graphql`
  query($id: String) {
    contentfulLocation(id: { eq: $id }) {
      slug
      id
      name
      skylineImage {
        gatsbyImageData(
          width: 1920
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
        id
        description
      }
    }
  }
`;

const HeroImage = ({ image }) => {
  return (
    <>
      <Box
        as={GatsbyImage}
        rounded='lg'
        image={image.gatsbyImageData}
        alt={image.description}
      />
    </>
  );
};

// markup
const LocationPage = ({ data, params }) => {
  return (
    <Layout>
      <SEO title={data.contentfulLocation.name} />
      <Stack spacing={3} p={4} maxWidth='3xl' as='div'>
        <Heading>{data.contentfulLocation.name}</Heading>
        <Divider />
        {data.contentfulLocation.skylineImage && (
          <HeroImage image={data.contentfulLocation.skylineImage} />
        )}
        <p>It's a place, and we're there!</p>
      </Stack>
    </Layout>
  );
};

export default LocationPage;
