import { Box, Button } from "@chakra-ui/react";

function SubmitButton() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
      <Button type="submit" bg="blue.200">
        Submit
      </Button>
    </Box>
  );
}

export default SubmitButton;