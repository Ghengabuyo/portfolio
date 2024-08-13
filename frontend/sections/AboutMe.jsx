import MyPicture from "../components/MyPicture";
import MyName from "../components/MyName";
import MyInfo from "../components/MyInfo";
import {
  Box,
  Grid,
  GridItem,
  Flex
} from "@chakra-ui/react";
import MyDescription from "../components/MyDescription";
import MyResume from "../components/MyResume";

function AboutMe() {
  return (

    <Flex h="100%" w='100%' bgImage={{
      md: "url('/projectBackground.jpg')"
    }}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgAttachment="fixed"
      p={5}>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
        <GridItem w='100%' rowSpan={2}>
          <MyPicture />
        </GridItem>
        <GridItem w='100%' rowSpan={2}>
          <MyName />
        </GridItem>
        <GridItem w='100%' h='100%'>
          <Flex direction="column" align="center" justify="center" h="100%" >
            <MyInfo />
            <MyResume />
          </Flex>
        </GridItem>
        <GridItem w='100%' >
          <MyDescription />
        </GridItem>
      </Grid>
    </Flex>

  );
}

export default AboutMe;