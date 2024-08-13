import { Box, Text } from "@chakra-ui/react";


function MyName() {

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' h='100%'>
      <Text fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }} textAlign='center' >R E G I N E</Text>
      <Text fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }} textAlign='center'>G A B U Y O</Text>
    </Box>
  );
}

export default MyName;