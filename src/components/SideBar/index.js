import React from "react";
import styles from './SideBar.module.css'
import picture from '../../assets/profile.jpg'
import { SocialIcon } from 'react-social-icons';
import NextPageButton from "../NextPageButton";
   
const SideBar = () =>{
 
  return (
    <div className={styles.sideBarOut}>
        
        <div className={styles.sideBody}>
          <img className={styles.picture} src={picture} alt="foto_perfil"/>             
          
          <div className={styles.informations}>             
            <div className={styles.name}>David Serrate</div>
            <div className={styles.name}>Software Engineer</div>
            <div className={styles.name}>
              <span class="material-symbols-outlined">pin_drop</span>
                Campo Grande, MS
            </div>
            <div className={styles.socials}>
            <div className={styles.contactme}>Contate-me</div>
              <SocialIcon url="https://api.whatsapp.com/send?phone=5567991673073&text=Ol%C3%A1,%20vim%20pelo%20seu%20portf%C3%B3lio!" />
              <SocialIcon url="https://www.linkedin.com/in/david-gama-dev/" />
              <SocialIcon url="https://www.instagram.com/_david.gama/" />
              <NextPageButton nextRoute='/about' color='#000' />
            </div>
          </div>


        </div>  
    </div>
  )
}

export default SideBar