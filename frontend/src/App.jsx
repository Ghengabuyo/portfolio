
import MyPortfolio from "./MyPortfolio";
import { ChakraProvider, Box } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <Box>
        <MyPortfolio />
      </Box>
    </ChakraProvider>
  );
}

export default App;