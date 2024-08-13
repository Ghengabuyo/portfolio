import { Box } from '@chakra-ui/react';
import Skills from '../sections/Skills';
import NavBar from '../components/Navbar';
import Header from '../components/Header';
import AboutMe from '../sections/AboutMe';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

function MyPortfolio() {
    return (


        <Box
            bgImage={{
                base: "url('/baseBackground.png')",
                md: "url('/mdBackground.jpg')"
            }}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgAttachment="fixed"
            width="100%"
            overflow="hidden" >
                
            <Box>
                <NavBar />
            </Box>

            <Box >
                <Header />
            </Box>
            <Box id="about" h="100%" >
                <AboutMe />
            </Box>
            <Box id="skills"  h="100%" >
                <Skills />
            </Box>
            <Box id="projects"  h={{ base: "100%", md: "100vh" }}>
                <Projects />
            </Box>
            <Box id="contact"  h="100%" >
                <Contact />
            </Box>
            <Box id="footer"  h="100%" >
                <Footer />
            </Box>

        </Box>



    );
}

export default MyPortfolio;