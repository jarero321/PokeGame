import React from "react";
import Loading from "../img/Loading.svg"
import {motion} from "framer-motion";
import {ContainerLoading} from "../styles/ItemLoadingStyle"
const ItemLoading = () => {
    return(
        <ContainerLoading
        animate={{opacity:0}}
        transition={{delay:1.5, duration:1}}>
            <motion.img  src={Loading}
            animate={{  rotate: 360 , opacity:1 }}
            transition={{ duration:2 , repeat: Infinity }} />
            <h2>
                Loading...
            </h2>
        </ContainerLoading>
    )
}
export default ItemLoading;