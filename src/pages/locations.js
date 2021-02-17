import * as React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import {
  Stack,
  Heading,
  Divider,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import SEO from '../components/seo';

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title='Locations' />
      <Stack spacing={3} p={4} as='div' centerContent>
        <Heading>Locations</Heading>
        <Divider />
        <UnorderedList>
          {data.allContentfulLocation.nodes.map((location) => {
            return (
              <ListItem id={location.id}>
                <Link to={`/locations/${location.slug}`}>{location.name}</Link>
              </ListItem>
            );
          })}
        </UnorderedList>
      </Stack>
    </Layout>
  );
};

export const query = graphql`
  query LocationPagesQuery {
    allContentfulLocation {
      nodes {
        name
        slug
        id
      }
    }
  }
`;

export default IndexPage;
