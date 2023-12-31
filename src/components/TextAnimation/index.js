import React from 'react';
import { motion } from 'framer-motion';
import style from './TextAnimation.module.css'
const TextAnimation = () => {
  const phrases = [
    "Olá, eu sou o David e estou empolgado em compartilhar meu trabalho com você!",
    "Seja bem-vindo ao meu portfólio!",
    "Desenvolvedor Full-stack apaixonado pelo que faço.",
    "Tenho 22 anos e uma paixão infindável por tecnologia.",
    "Dê uma olhada nas minhas criações e projetos!",    
    "Bem-vindo(a)! Aqui você encontrará o resultado da minha jornada como desenvolvedor.",    
    "Sinta-se à vontade para explorar e conhecer mais sobre meu trabalho.",    
    "Criando soluções através de linhas de código e muita determinação!",    
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = React.useState(0);

  const nextPhrase = () => {
    setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
  };

  return (
    
    <div className={style.textAnimation}
      style={{ height:'100vh',display: 'flex', justifyContent: 'center', alignItems: 'center',  width:'100%' , flexWrap:'wrap' }}>       
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        style={{ fontSize: '30px' }}
        >
        <motion.p
            key={currentPhraseIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onAnimationComplete={nextPhrase}
            transition={{ duration: 3 }}
        >
            {phrases[currentPhraseIndex]}
        </motion.p>
        </motion.div>
  </div>
  

  );
};

export default TextAnimation;

 