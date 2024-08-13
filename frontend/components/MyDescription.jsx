import { Box, Text, Flex } from "@chakra-ui/react";

function MyDescription() {


  return (

    <Flex direction="column" align="center" justify="center" textAlign="center" w={{ base: "100%", lg: "80%" }} h="100%" m="0 auto">
      <Box mb={4} bgGradient="linear(to left, #F5E8DD, #f4c4db)" borderRadius='15px' px={{ base: '10px', md: '50px', lg: '70px' }} py={{ base: '30px', lg: '40px' }}>
        <Box >
          <Text>
            A full-stack web developer passionate about crafting dynamic and visually appealing digital experiences. With skills in both front-end and back-end technologies, I specialize in turning creative ideas into functional web applications. I’m eager to use my expertise to build solutions that exceed user expectations.
          </Text>
        </Box >
        <Box mb={4} >
          <Text>
            Outside of coding, I enjoy singing and editing videos and audio, blending my technical and creative talents.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default MyDescription; 