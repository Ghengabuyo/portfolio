import React, { useState, useEffect } from 'react';
import { Box, Progress, Text, HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SkillProgressBar = ({ skill, targetValue, duration, icon, color, startAnimation }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    if (!startAnimation) return;


    let start = 0;
    const increment = targetValue / (duration / 10);

    const interval = setInterval(() => {
      start += increment;
      setValue(Math.min(start, targetValue));

      if (start >= targetValue) {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [startAnimation, targetValue, duration]);

  return (
    <HStack width="100%" mb={4} spacing={4} px={{base: "30px", md: "90px", lg: "120px"}}>
      <FontAwesomeIcon icon={icon} size="2x" color={color} />
      <Box width="100%">
        <Text mb={1} fontWeight="bold">{skill}</Text>
        <Progress value={value} sx={{
          '& > div': {
            backgroundColor: '#FF9EAA'
          }
        }} />
      </Box>
    </HStack>
  );
};


export default SkillProgressBar;
