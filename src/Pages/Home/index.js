import React from "react";
import TextAnimation from "../../components/TextAnimation";
import { motion } from 'framer-motion';
import NextPageButton from "../../components/NextPageButton";
import SideBar from "../../components/SideBar";
import styles from './Home_styles.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <SideBar />               

        <div className={styles.content}>
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
              <div className={styles.textAnimationContent}>
                <TextAnimation />
              <NextPageButton nextRoute='/about'  />
              </div>

              </motion.div>          
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}         
            transition={{ duration: 0.5 }}
        >
            <div className={styles.about_me}>
               <div className={styles.about_me_container}>
               Sobre mim
               </div>
            </div>

            <NextPageButton nextRoute='projects'/>
        </motion.div>
    </>
  )
}

export default Home;
