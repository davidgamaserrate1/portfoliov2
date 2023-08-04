import React from "react";
import { motion } from 'framer-motion';


const About = ()=>{
    return(
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}         
            transition={{ duration: 0.5 }}
        >
            Sobre mim
        </motion.div>
    )
}

export default About