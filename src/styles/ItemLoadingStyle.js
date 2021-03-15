import {Colors} from "../styles/colors.js"
import styled from "styled-components";
import PokeGame from "../img/PokeGame.ttf"
import {motion} from "framer-motion";
export const ContainerLoading = styled(motion.div)`
     @font-face {
     font-family: 'PokeGame';
     src: url(${PokeGame});
    }
    width:80%;
    height:20%;
    background-color: ${Colors.main};
    display:flex;
    align-items:center;
    justify-content: center;
    margin-left:10%;
    position: relative;
    top:45%;
    border-radius: 20px;
    border: 5px solid ${Colors.secondary};
    box-shadow: 3px 3px 6px ;
    img{
        width:50%;
        height:50%;
    }
    h2 {
        font-family: "PokeGame";

        width:70%;
        font-size:50px;
        color:${Colors.secondary}
    }
    @media (min-width:1200px){
        width:30%;
        margin-left:35%;
    }

`;