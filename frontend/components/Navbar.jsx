import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  HStack,
  VStack,
  Image,
  Text
} from '@chakra-ui/react';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-scroll';

function NavBar() {


  //CHANGE LOG0
  //CHANGE COLOR
  //RESPONSIVENESS OF LOGO , SECTIONS AND HAMBURGER MENU
  //TRANSITION WHEN HAMBURGER MENU IS OPEN

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="rgb(243, 213, 213)" width="100%" justify-content="space-around" position='fixed' zIndex={10}>
      <Flex w='100%' h={16} alignItems="center" justifyContent="space-between" >
        <Box w='50%' pl={{ base: '7', md: '10', lg: '20', xl: 'flex' }}>
          <Image
            width={{ base: '55px', md: '60px' }}
            height={{ base: '40px', md: '45px' }}
            src='/mylogo.png'
            alt='my logo' />
        </Box>
        <HStack w='50%' fontSize='xl' spacing={9} justifyContent="center" align="center" textAlign="center" display={{ base: 'none', md: 'flex' }}>
          <Link to="about" smooth={true} duration={500} px={3} py={1} rounded={'md'} _hover={{ textDecoration: 'none', color: '#E90074' }} style={{ cursor: 'pointer' }}>About</Link>
          <Link to="skills" smooth={true} duration={500} px={3} py={1} rounded={'md'} _hover={{ textDecoration: 'none', color: '#E90074' }} style={{ cursor: 'pointer' }}>
            <Text>Skills</Text>
          </Link>
          <Link to="projects" smooth={true} duration={500} px={3} py={1} rounded={'md'} _hover={{ textDecoration: 'none', color: '#E90074' }} style={{ cursor: 'pointer' }}>Projects</Link>
          <Link to="contact" smooth={true} duration={500} px={3} py={1} rounded={'md'} _hover={{ textDecoration: 'none', color: '#E90074' }} style={{ cursor: 'pointer' }}>Contact</Link>
        </HStack>

        <Flex justifyContent="center" align="center" textAlign="center">
          <IconButton
            mr={2}
            size="lg"
            icon={<RxHamburgerMenu />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={onToggle}
            bg="none"
            _hover={{ bg: 'none' }}
            _active={{ bg: 'none' }}
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box
          pb={4}
          display={{ md: 'none' }}
          zIndex={2}
          position="absolute"
          bg="rgb(243, 213, 213)"
          left="0"
          right="0"
        >
          <VStack as="nav" spacing={4}>
            <Link to="about" smooth={true} duration={500} px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', color: '#E90074' }} style={{ cursor: 'pointer' }}>About Me</Link>
            <Link to="skills" smooth={true} duration={500} px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', color: '#E90074' }} style={{ cursor: 'pointer' }}>Skills</Link>
            <Link to="projects" smooth={true} duration={500} px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', color: '#E90074' }} style={{ cursor: 'pointer' }}>Projects</Link>
            <Link to="contact" smooth={true} duration={500} px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', color: '#E90074' }} style={{ cursor: 'pointer' }}>Contact Me</Link>
          </VStack>
        </Box>
      ) : null}
    </Box>
  );
};

export default NavBar;