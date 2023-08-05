import React from "react";
import styles from './SideBar.module.css'
import picture from '../../assets/profile.jpg'
import { SocialIcon } from 'react-social-icons';
 
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
              <SocialIcon url="https://twitter.com/jaketrent" />
              <SocialIcon url="https://www.linkedin.com/" />
              <SocialIcon url="https://www.instagram.com/" />
            </div>
          </div>


        </div>  
    </div>
  )
}

export default SideBar