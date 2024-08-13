import { Image, Text, Divider } from "@chakra-ui/react";

function HappiTails() {

  return (
    <>
      <Image src="./happiTails.png" alt="Happi Tails" borderRadius='lg' />
      <Text mt='6'>
        '"Happi Tails" is a comprehensive pet adoption platform, built using the MERN stack (MongoDB, Express, React, Node.js), designed to connect pet owners with potential adopters. Whether you're looking to adopt a pet or find a loving home for your own, happiTails makes the process simple and user-friendly.'
      </Text>
      <Text mt='6' fontWeight='bold'>
        User Authentication:
      </Text>
      <Text mt='.5'>
        Secure registration, login, and logout functionalities ensure that only registered users can create posts.


      </Text>
      <Text mt='6' fontWeight='bold'>
        Post Creation:
      </Text>
      <Text mt='.5'>
        Logged-in users can create detailed posts for pets available for adoption, complete with images and descriptions.
      </Text>
      <Text mt='6' fontWeight='bold'>
        Homepage Highlights:
      </Text>
      <Text mt='.5'>
        The homepage showcases featured posts and suggestions, providing users with a quick overview of pets available for adoption.

      </Text>
      <Text mt='6' fontWeight='bold'>
        Favorites Management:
      </Text>
      <Text mt='.5'>
        Users can add movies to their favorites list for easy access and remove them as desired.
      </Text>
      <Text mt='6' fontWeight='bold'>
        Donation Functionality:
      </Text>
      <Text mt='.5'>
        Users can support the platform through donations, helping maintain and improve the services offered.
      </Text>
      <Text mt='6' fontWeight='bold'>
        Post Browsing:
      </Text>
      <Text mt='.5'>
        Users can explore various pets up for adoption and contact the owners through the platform.
      </Text>


      <Divider borderColor="black.500" mt='6' />
      <Text mt='6'>
        '"Happi Tails" is more than just a website—it's a bridge between pets in need of homes and those ready to provide them.'
      </Text>
    </>
  );
}
export default HappiTails