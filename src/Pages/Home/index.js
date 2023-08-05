import React from "react";
import TextAnimation from "../../components/TextAnimation";
 
import { motion } from 'framer-motion';
import NextPageButton from "../../components/NextPageButton";
import SideBar from "../../components/SideBar";
import styles from './Home_styles.module.css'

const Home = () => {
 
  return (
    <div className={styles.homeContainer}>
      <SideBar/>        
      <div className={styles.home}>
      <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}         
          transition={{ duration: 0.5 }}    
          className={styles.homeContainer2} 
          >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: "easeOut" }} 
            style={{ fontSize: '30px', textAlign: 'center' }}
            >
            <TextAnimation />
            </motion.div>          
            <NextPageButton nextRoute='/about'/>
      </motion.div>
        </div>
    </div>
  )
}

export default Home;
