import { Box, Button } from "@chakra-ui/react";


function MyResume() {

  return (

    <Box textAlign="center" mt={5}>
      <a
        href="Regine Gabuyo - CV.pdf" download>
        <Button bg='rgb(239, 188, 155)' size='lg'>
          My Resume
        </Button>
      </a>
    </Box>
  );
}

export default MyResume;