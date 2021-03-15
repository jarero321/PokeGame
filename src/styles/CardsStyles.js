import styled from "styled-components";
import Card from "../img/Card.svg";
import fondoback from "../img/fondoback.svg";
export const CardContainer = styled.div`
    width: 90%;
    height: 90%;
    transition: transform 1s;
    transform-style: preserve-3d;
    transform: ${props => props.volteo == true ? "rotateY(180deg)" : "rotateY(0deg)"};
`;
export const Front = styled.div`
     background-image: url(${Card});
     background-size:cover;
     background-position:center;
     height: 100% ;
     width: 100%;
     position: absolute;
     backface-visibility: hidden;
     border-radius:10px;
     box-shadow: 3px 3px 6px ;
     img{
         width: 50%;
         height: 50%;
         position: relative;
         top:25%;
         left:25%;
     }

`;
export const Back = styled.div`
    background-image: url(${fondoback});
    background-size: cover;
    background-position:center;
    transform: rotateY(180deg);    
    height: 100% ;
    width:100%;
    position:absolute;
    backface-visibility: hidden;
    background-position:center;
    border-radius:10px;
    box-shadow: 3px 3px 6px ;
    img{
        width:90%;
        height:90%;
        position: relative;
        top:5%;
        left:5%;
    }
`;