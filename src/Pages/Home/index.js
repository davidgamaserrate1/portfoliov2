import React from "react";
import TextAnimation from "../../components/TextAnimation";
import './home_styles.css'
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from 'framer-motion';

import NextPageButton from "../../components/NextPageButton";

const Home = () => {
 
  return (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}         
        transition={{ duration: 0.5 }}
         
      >
    <div className="home" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1, ease: "easeOut" }} 
        style={{ fontSize: '30px', textAlign: 'center' }}
      >
      <TextAnimation />
      </motion.div>
      {/* <div className="home_down" style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)' }}> 
        <ChevronDownIcon w={10} h={10} color={'#fff'} onClick={()=>{naviagateNextPage()}} />
      </div> */}
      <NextPageButton nextRoute='/about'/>
    </div>
    </motion.div>
  )
}

export default Home;
