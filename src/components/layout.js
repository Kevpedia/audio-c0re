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
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import ThemeToggle from './toggle-theme';

const headerLinksStyle = {
  margin: `1rem`,
  height: `48px`,
};

const Header = ({ siteTitle, locations }) => {
  const buttonTextColor = useColorModeValue('teal.500', 'teal.600');
  return (
    <Box
      as='header'
      background='teal.100'
      px={4}
      m={2}
      borderRadius='lg'
      boxShadow='xl'>
      <Flex as='div' className='header-container' direction='row'>
        <Heading m={4} as='title' display='initial' color='teal.600'>
          {siteTitle}
        </Heading>
        <Spacer />
        <ButtonGroup variant='ghost' colorScheme='teal'>
          <Button
            as={Link}
            style={headerLinksStyle}
            textColor={buttonTextColor}
            to='/'>
            Home
          </Button>
          <Button
            as={Link}
            style={headerLinksStyle}
            textColor={buttonTextColor}
            to='/about'>
            About Us
          </Button>
          <Button
            as={Link}
            style={headerLinksStyle}
            textColor={buttonTextColor}
            to='/contact'>
            Contact
          </Button>
          <Box style={headerLinksStyle}>
            <Menu>
              <MenuButton
                as={Button}
                textColor={buttonTextColor}
                rightIcon={<ChevronDownIcon />}>
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
};

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
        <Container as='main' w='100%' maxWidth='100%' centerContent>
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
