import { Box, Image, Flex, Text } from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';

function Header() {


  return (
    <Box
      w='100%'
      p={4}
      position="relative"
      h="auto"

    >
      <Flex
        w="100%"
        h="100%"
        align="center"
        justifyContent="center"
        pt={{ base: "100px", md: "190px", lg: "220px" }}
        pb={{ base: "50px", md: "160px", lg: "220px" }}
        position="relative"
      >
        <Image
          src='/header.jpg'
          alt='my header'
          objectFit="cover"
          w="100%"
          h="100%"
        />
        <Box
          position="absolute"
          color="black"
          fontSize={{ base: "xl", md: "5xl", lg: "7xl" }}
          fontWeight="bold"
          textAlign="center"
        >
          <Typewriter
            options={{
              strings: ['Transforming visions into reality'],
              autoStart: true,
              delay: 100,
              loop: true,
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
}


export default Header;
