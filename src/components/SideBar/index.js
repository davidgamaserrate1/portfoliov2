import React from "react";
import styles from './SideBar.module.css'
import picture from '../../assets/profile.jpg'
const SideBar = () =>{
 
  return (
    <div className={styles.sideBarOut}>
        
        <div className={styles.sideBody}>
          <img className={styles.picture} src={picture}/>             
          <div className={styles.informations}>             
            <div className={styles.name}>David Serrate</div>
            <div className={styles.name}>Software Engeener</div>
            <div className={styles.name}>
              <span class="material-symbols-outlined">pin_drop</span>
                Campo Grande, MS
            </div>
          </div>


        </div>  
    </div>
  )
}

export default SideBar