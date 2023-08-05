import React from 'react';
import { ChakraProvider,  } from '@chakra-ui/react';
import RoutesApp from './routes/index.js';
import './styles.css'
//import SideBar from './components/SideBar/index.js';

function App() {
  return (
    <ChakraProvider>    
        
        <RoutesApp/>      
    </ChakraProvider>
  );
}

export default App;
