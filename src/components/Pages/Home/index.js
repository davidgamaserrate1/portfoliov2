import React from "react";
import TextAnimation from "../../TextAnimation";
import './home_styles.css'
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home">
      <TextAnimation />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1, ease: "easeOut" }} // Adicionado "ease: easeOut" e "duration: 1"
        style={{ fontSize: '30px' }}
      >
        <div className="home_down"> 
            <ChevronDownIcon w={10} h={10} color={'#fff'} style={{ position: 'absolute', bottom: '30%', left: '50%' , margin:'autom auto'}} />
        </div>
      </motion.div>
    </div>
  )
}

export default Home;
