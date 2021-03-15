import styled from "styled-components";
import Fondo from "../img/Fondo-home.svg"
import {Colors} from "../styles/colors.js"
import PokeGame from "../img/PokeGame.ttf"
import { Link } from "react-router-dom";

export const SectionHome = styled.section`
    @font-face {
     font-family: 'PokeGame';
     src: url(${PokeGame});
    }
    height:100vh;
    width:100vw;
    background-image: url(${Fondo});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
`;
export const ContainerHome = styled.div`
    width:100%;
    height:80%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
export const Logotipo = styled.div`
    text-align:center;
    h2{
        font-family:"PokeGame";
        font-size:70px;
        color:${Colors.main};
        text-shadow: 10px 10px ${Colors.secondary};
        position:relative;
        top:-25%;

    }
    img{
        width:75%;
        height:75%;
        position:relative;
        top:20%;
    }
    @media (min-width:768px){
        h2{
            font-size:120px;
        }
    }
    @media (min-width:1200px){
        font-size:150px;
        img{
            width:60%;
            height:60%;
        }
        margin-top:10%
    }
`;
export const BottonHome = styled(Link)`
    text-decoration:none;
    margin-top:10%;
    cursor:pointer;
    font-family:"PokeGame";
    width:70%;
    text-shadow: 8px 4px ${Colors.secondary};
    text-align:center;
    border: 5px solid ${Colors.main};
    border-radius: 10px;
    font-size:50px;
    color:${Colors.main};
    &:hover{
        background-color:${Colors.main}
    }
    @media (min-width:1200px){
        width:30%;
        margin-bottom:10%;
        margin-top:0;
    }
`;