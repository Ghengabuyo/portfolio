import { Image, Text, Divider } from "@chakra-ui/react";

function movieGlimpse() {

  return (
    <>
      <Image src="./movieGlimpse.png" alt="Movie Glimpse" borderRadius='lg' />
      <Text mt='6'>
        '"Movie Glimpse" is a comprehensive full-stack web application designed to provide users with an engaging platform to search and explore movie trailers. Built using React for the front end and Node.js, Express, and MongoDB for the back end, this project offers a seamless and interactive user experience.'
      </Text>
      <Text mt='6' fontWeight='bold'>
        Movie Search:
      </Text>
      <Text mt='.5'>
        Users can search for movies, discovering trailers and relevant details effortlessly.

      </Text>
      <Text mt='6' fontWeight='bold'>
        Categories:
      </Text>
      <Text mt='.5'>
        The application organizes movies into various categories, making it easy to find movies by genre, popularity, or release date.
      </Text>
      <Text mt='6' fontWeight='bold'>
        Movie Details:
      </Text>
      <Text mt='.5'>
        Each movie page provides extensive details, including the trailer, synopsis, cast, and more.
      </Text>
      <Text mt='6' fontWeight='bold'>
        Favorites Management:
      </Text>
      <Text mt='.5'>
        Users can add movies to their favorites list for easy access and remove them as desired.
      </Text>
      <Text mt='6' fontWeight='bold'>
        Custom API:
      </Text>
      <Text mt='.5'>
        I created custom endpoints and APIs to handle movie data efficiently, ensuring fast and reliable performance.
      </Text>
      <Divider borderColor="black.500" mt='6' />
      <Text mt='6'>
        '"Explore Rome" offers a user-friendly interface and a rich digital experience, combining aesthetic appeal with practical functionality. This project highlights the capabilities of vanilla JavaScript in creating an interactive and fully functional web application.'
      </Text>
    </>
  );
}
export default movieGlimpse;