import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import {
  Container,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import ThemeToggle from './toggle-theme';

const headerLinksStyle = {
  margin: `1rem`,
  height: `48px`,
};

const Header = ({ siteTitle, locations }) => (
  <Box as='header' background='teal.100' px={4} m={2} borderRadius='lg'>
    <Flex as='div' className='header-container' direction='row'>
      <Heading as='h1' m={4} as='title' display='initial' color='teal.600'>
        {siteTitle}
      </Heading>
      <Spacer />
      <ButtonGroup variant='solid' colorScheme='teal'>
        <Link style={headerLinksStyle} to='/'>
          <Button>Home</Button>
        </Link>
        <Link style={headerLinksStyle} to='/about'>
          <Button>About Us</Button>
        </Link>
        <Link style={headerLinksStyle} to='/contact'>
          <Button>Contact</Button>
        </Link>
        <Box style={headerLinksStyle}>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Locations
            </MenuButton>
            <MenuList>
              {locations.map((loc) => {
                return (
                  <MenuItem key={loc.id}>
                    <Link to={`/locations/${loc.slug}`}>{loc.name}</Link>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </Box>
        <Box style={headerLinksStyle} my={4}>
          <ThemeToggle />
        </Box>
      </ButtonGroup>
    </Flex>
  </Box>
);

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site: site {
          siteMetadata {
            title
          }
        }
        allContentfulLocation {
          nodes {
            name
            slug
            id
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          locations={data.allContentfulLocation.nodes}
        />
        <Container as='main' m={2} maxW='xl' centerContent>
          {children}
        </Container>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
