import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Stack, Heading, Divider, Box } from '@chakra-ui/react';
import SEO from '../components/seo';
import { GatsbyImage } from 'gatsby-plugin-image';

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
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title='Home' titleTemplate='%s | Audio-C0re Headphone Rentals' />
      <Stack maxWidth='3xl' spacing={3} p={4} as='div' centerContent>
        <HeroImage image={data.contentfulHomePageContent.heroImage} />
        <Divider />
        <Heading>Headphones When You Need Them!</Heading>
        <p>We do headphones and stuff...</p>
      </Stack>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    contentfulHomePageContent {
      id
      heroImage {
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

export default IndexPage;
