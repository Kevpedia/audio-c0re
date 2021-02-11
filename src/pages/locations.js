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

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
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
