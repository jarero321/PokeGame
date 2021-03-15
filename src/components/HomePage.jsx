import React from "react";
import { SectionHome, ContainerHome, Logotipo, BottonHome } from "../styles/HomePageStyle";
import Pokeball from "../img/Pokeball.svg"
import { motion } from "framer-motion";
const HomePage = () => {
    return (
        <SectionHome>
            <ContainerHome>
                <Logotipo>
                    <motion.img src={Pokeball}
                        initial={{ opacity: 0 }}
                        animate={{ rotate: 360, opacity: 1 }}
                        transition={{ duration: 2 }} />
                    <motion.h2
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            ease: "easeOut",
                            duration: 2,
                            type: "spring",
                            bounce: 0.3
                        }}>POKÉGAME</motion.h2>

                </Logotipo>
                <BottonHome to="/Game">
                    Start
                </BottonHome>
            </ContainerHome>
        </SectionHome>
    )
}
export default HomePage