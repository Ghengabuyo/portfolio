import ExploreRomeContent from "../components/modalsContent/ExploreRomeContent";
import HappiTails from "../components/modalsContent/HappiTails";
import MovieGlimpse from "../components/modalsContent/MovieGlimpse"
import ProjectCard from "../components/ProjectCard";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";


function Projects() {

  return (

    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgImage={{
        md: "url('/projectBackground.jpg')"
      }}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgAttachment="fixed"
      height="100%"
      width="100%"
      flexDirection="column"
      pb={5}
      px={{ base: 6 }}
      mt="150px"
    >
      <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
        <Text fontSize="4xl" fontWeight="bold">MY PROJECTS</Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <ProjectCard
          projectName='EXPLORE ROME'
          projectPoster="./exploreRome.png"
          description='"Explore Rome" is a dynamic ticketing website built using vanilla JavaScript, designed to provide a seamless experience for purchasing museum tickets in Rome, Italy. This project allows users to browse through various museums, view detailed information and pictures of each museum, and effortlessly purchase tickets.'
          gitHubLink="https://github.com/Ghengabuyo/Explore-Rome"
          websiteLink="https://explorerome.netlify.app"
          modalContent={
            <ExploreRomeContent />
          }
        />
        <ProjectCard
          projectName='MOVIE GLIMPSE'
          projectPoster="./movieGlimpse.png"
          description='"Movie Glimpse" is a comprehensive full-stack web application designed to provide users with an engaging platform to search and explore movie trailers. Built using React for the front end and Node.js, Express, and MongoDB for the back end, this project offers a seamless and interactive user experience.'
          gitHubLink="https://github.com/Ghengabuyo/Movie-Glimpse"
          websiteLink="https://p4-node-app-frontend-de38.onrender.com/"
          modalContent={
            <MovieGlimpse />
          }
        />
        <ProjectCard
          projectName='HAPPY TAILS'
          projectPoster="./happiTails.png"
          description="'Happi Tails' is a comprehensive pet adoption platform, built using the MERN stack (MongoDB, Express, React, Node.js), designed to connect pet owners with potential adopters. Whether you\'re looking to adopt a pet or find a loving home for your own, happiTails makes the process simple and user-friendly."
          gitHubLink="https://github.com/Uplift-Batch-20/happitails"
          websiteLink="https://happitails.ph"
          modalContent={
            <HappiTails />
          }
        />
      </SimpleGrid>
    </Box>

  );
}

export default Projects;