import { Box, List, ListItem, Text } from "@chakra-ui/react";


function MyInfo() {

  return (
    <Box>
      <List spacing={3} textAlign='center'>
        <ListItem>
          <Text as="span" fontWeight="bold">Age: </Text>28
        </ListItem>
        <ListItem>
          <Text as="span" fontWeight="bold">Address: </Text>Rome, Italy
        </ListItem>
        <ListItem>
          <Text as="span" fontWeight="bold">Email: </Text>reginegabuyo3031@gmail.com
        </ListItem>
      </List>
    </Box>
  );
}

export default MyInfo;