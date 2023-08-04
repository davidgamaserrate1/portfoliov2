import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styles from './NextPageButton.module.css'
import { useNavigate } from "react-router-dom";

const NextPageButton =(props)=>{
    const navigation = useNavigate()
    
    const naviagateNextPage = () =>{
      navigation(props.nextRoute)
    }
  
    return(
        <div className={styles.home_down} 
            style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)' }}
            > 
            <ChevronDownIcon w={10} h={10} color={'#fff'} 
                onClick={()=>{naviagateNextPage(props.nextRoute)}} 
            />
        </div>
    )
}

export default NextPageButton