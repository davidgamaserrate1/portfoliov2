import React from 'react';
import { ChakraProvider,  } from '@chakra-ui/react';
import './styles.css'
import Home from './components/Pages/Home/index.js';

function App() {
  return (
    <ChakraProvider>
      <div className="app">
        <Home/>
      </div>
    </ChakraProvider>
  );
}

export default App;
