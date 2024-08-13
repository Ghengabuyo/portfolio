import { Image, Text, Divider } from "@chakra-ui/react";


function ExploreRomeContent() {
  return (
    <>
      <Image src="./exploreRome.png" alt="Explore Rome" borderRadius='lg' />
      <Text mt='6'>
        '"Explore Rome" is a dynamic ticketing website built using vanilla JavaScript, designed to provide a seamless experience for purchasing museum tickets in Rome, Italy. This project allows users to browse through various museums, view detailed information and pictures of each museum, and effortlessly purchase tickets.'
      </Text>
      <Text mt='6' fontWeight='bold'>
        Museum Gallery:
      </Text>
      <Text mt='.5'>
        Users can explore a visually engaging gallery showcasing pictures and descriptions of museums in Rome.
      </Text>
      <Text mt='6' fontWeight='bold'>
        Detailed Information:
      </Text>
      <Text mt='.5'>
        Each museum page provides comprehensive details about the museum, including its history, exhibits, and visitor information.
      </Text>
      <Text mt='6' fontWeight='bold'>
        Ticket Purchase:
      </Text>
      <Text mt='.5'>
        Users can conveniently buy tickets through the site, with a streamlined checkout process.
      </Text>
      <Text mt='6' fontWeight='bold'>
        QR Code Generation:
      </Text>
      <Text mt='.5'>
        Upon purchase, the site generates a QR code for each ticket, utilizing an API to ensure quick and secure access to the museum.
      </Text>
      <Divider borderColor="black.500" mt='6' />
      <Text mt='6'>
        '"Explore Rome" offers a user-friendly interface and a rich digital experience, combining aesthetic appeal with practical functionality. This project highlights the capabilities of vanilla JavaScript in creating an interactive and fully functional web application.'
      </Text>
    </>
  );
}

export default ExploreRomeContent;