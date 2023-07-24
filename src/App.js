import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import TextAnimation from './components/TextAnimation';
function App() {
  return (
    <ChakraProvider >
       <TextAnimation/>
    </ChakraProvider>
  );
}

export default App;
