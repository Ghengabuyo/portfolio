import { Box, VStack, Text } from "@chakra-ui/react";
import SkillProgressBar from "../components/SkillProgressBar";
import { faHtml5, faCss3Alt, faReact, faJsSquare, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useRef, useState } from 'react';

function Skills() {


  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <Box ref={sectionRef} bg="transparent" h='100%' mt="150px" >
      <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
        <Text fontSize="4xl" fontWeight="bold">SKILLS</Text>
      </Box>
      <VStack spacing={6} align="stretch"  >
        <SkillProgressBar skill="HTML" targetValue={85} duration={2000} icon={faHtml5} color="#E34F26" startAnimation={isVisible}/>
        <SkillProgressBar skill="CSS" targetValue={70} duration={2000} icon={faCss3Alt} color="#1572B6" startAnimation={isVisible} />
        <SkillProgressBar skill="JavaScript" targetValue={80} duration={2000} icon={faJsSquare} color="#F7E02D"  startAnimation={isVisible}/>
        <SkillProgressBar skill="React, ExpressJs" targetValue={90} duration={2000} icon={faReact} color="#61DAFB" startAnimation={isVisible} />
        <SkillProgressBar skill="NodeJs, MongoDb" targetValue={90} duration={2000} icon={faNodeJs} color="#8CC84B" startAnimation={isVisible}/>
      </VStack>
    </Box>


  );
}

export default Skills;