import * as React from 'react';
import Layout from '../components/layout';
import {
  Box,
  Heading,
  FormControl as ChakraFormControl,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { FormiumForm, defaultComponents } from '@formium/react';
import { formium } from '../lib/formium';

const slug = 'contact';

const Header = ({ children }) => {
  return <Heading>{children}</Heading>;
};

const TextInput = (props) => {
  return <Input {...props}></Input>;
};

const SubmitButton = ({ props, children }) => {
  return (
    <Button colorScheme='teal' {...props}>
      {children}
    </Button>
  );
};

const FormControl = ({ props, children }) => {
  return (
    <ChakraFormControl m={2} {...props}>
      {children}
    </ChakraFormControl>
  );
};

const formComponents = {
  ...defaultComponents,
  Header,
  FormControl,
  TextInput,
  Textarea,
  SubmitButton,
};

const ContactForm = ({ data }) => {
  const [success, setSuccess] = React.useState(false);
  if (success) {
    if (window) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'contact-form' });
    }
    return <Box as='div'>Thank you! We'll be in touch!</Box>;
  }
  return (
    <FormiumForm
      data={data.formiumForm}
      components={formComponents}
      onSubmit={async (values) => {
        await formium.submitForm(slug, values);
        setSuccess(true);
      }}
    />
  );
};

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <Box
        as='div'
        p={8}
        mx={'auto'}
        my={2}
        borderWidth='1px'
        borderRadius='lg'
        centerContent>
        <Heading py={1}>Contact Us</Heading>
        <ContactForm data={data} />
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query {
    formiumForm(slug: { eq: "contact" }) {
      id
      name
      slug
      projectId
      schema
      createAt
      updateAt
    }
  }
`;

export default ContactPage;
