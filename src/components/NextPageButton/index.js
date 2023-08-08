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
        <div className={styles.home_down} > 
            <ChevronDownIcon w={10} h={10} color={'#fff'} 
                onClick={()=>{naviagateNextPage(props.nextRoute)}} 
            />
            {/* <ChevronDownIcon w={10} h={10} color={'#fff'} 
                onClick={()=>{naviagateNextPage(props.nextRoute)}} 
            /> */}
        </div>
    )
}

export default NextPageButton