import React from "react";
import { motion } from 'framer-motion';
import styles from './AboutStyles.module.css'
import NextPageButton from "../../components/NextPageButton";

const About = ()=>{
    return(
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}         
            transition={{ duration: 0.5 }}
        >
            <div className={styles.container}>
                Sobre mim
            </div>

            <NextPageButton nextRoute='projects'/>
        </motion.div>
    )
}

export default About