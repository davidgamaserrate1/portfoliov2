import React from 'react';
import { ChakraProvider,  } from '@chakra-ui/react';
import RoutesApp from './routes/index.js';
import './styles.css'

function App() {
  return (
    <ChakraProvider>      
        <RoutesApp/>      
    </ChakraProvider>
  );
}

export default App;
