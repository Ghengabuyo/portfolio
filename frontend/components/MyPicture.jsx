import { Box, Image } from '@chakra-ui/react'

function MyPicture() {

  return (
    <Box display="flex" justifyContent='center' alignItems='center' h='100%'>
      <Image src='/myPhoto.jpg' alt="my Photo" borderRadius='50%' w={{ base: '250', md: '350px' }} h={{ base: '250', md: '350px' }} align='center' />
    </Box>
  );
}

export default MyPicture;