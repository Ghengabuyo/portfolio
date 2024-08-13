import { Card, CardHeader, CardBody, Heading, Text, Box } from '@chakra-ui/react'

function Email() {
  return (

    <Box display="flex" justifyContent="center" textAlign="center" alignItems="center" h="100%" w="100%" >
      <Card align='center' bg="transparent" w="100%" boxShadow='none'>
        <CardHeader>
          <Heading size='xl'>CONVEY YOUR IDEAS</Heading>
        </CardHeader>
        <CardBody >
          <Text textAlign="center">
            Contact me for questions, technical assistance, or collaboration opportunities via the email provided.
          </Text>
          <Text textAlign="center" color="#E90074" fontWeight="600" mt={3} fontSize="20px">
            <a href="mailto:reginegabuyo3031@gmail.com"> reginegabuyo3031@gmail.com </a>
          </Text>
        </CardBody>

      </Card>
    </Box>
  );
}

export default Email;