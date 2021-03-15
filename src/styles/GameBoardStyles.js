import styled from "styled-components";
import PokeGame from "../img/PokeGame.ttf"
import { Link } from "react-router-dom";
export const SectionGameBoard = styled.section`
    @font-face {
     font-family: 'PokeGame';
     src: url(${PokeGame});
    }
    width: 80%;
    height: 80%;
    position: relative;
    top:10%;
    left:10%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5,1fr)
`;
export const Congrats = styled.div`
    position:fixed;
    height:30%;
    width:70%;
    background-color:#E6B239;
    border: 5px solid #0E377B;
    border-radius:20px;
    top:35%;
    left:15%;
    @media (min-width:1200px){
        width:60%;
        height:30%;
    }
`;
export const ContainerCongrats = styled.div`
    width:90%;
    height:90%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    h2{
    font-family:"PokeGame";
    font-size:40px;
    position:relative;
    left:5%;
    color:#0E377B;
    }
`;
export const Enlace = styled(Link)`
    margin-top:10%;
    width:95%;
    height:30%;
    position:relative;
    left:5%;
    border: 5px solid #0E377B;
    border-radius: 10px;
    text-align:center;
    text-decoration:none;
    p{
        font-family:"PokeGame";
        margin-top:5%;
        color:#0E377B;
        
    }
    @media (min-width:1200px){
        width:50%;
        height:50%;
    }
    p{
        margin-top:2%;
    }
    &:hover{
        background-color:#0E377B;
        p{
            color:#E6B239;
        }
    }
`;