import React, { useEffect, useState } from "react";
import { CardContainer, Front, Back } from "../styles/CardsStyles";
import Loading from "../img/Loading.svg"


const Card = ({ id,
    img,
    items,
    indextarget,
    setindextarget,
    setcontador,
    contador }) => {
    const [volteo, setvolteo] = useState(false)
    const handleclick = (e) => {
        if (!items[id].volteo && volteo % 3 === 0) {
            setvolteo(volteo => !volteo);
            setcontador(contador + 1);
            const newindex = [...indextarget];
            newindex.push(id)
            setindextarget(newindex)
        }else if(
            contador % 3 === 1 &&
            !items[id].volteo &&
            indextarget.indexOf(id) < 0
        ){
            setvolteo(state => !state);
            setcontador(contador + 1);
            const newindex = [...indextarget];
            newindex.push(id);
            setindextarget(newindex)
        }
    }
    useEffect(() => {
        if (indextarget[2] === true && indextarget.indexOf(id) > -1) {
            setTimeout(() => {
                setvolteo(state => !state)
                setcontador(contador + 1)
                setindextarget([])
            }, 800)
        }else if(
            indextarget[2] === false && id === 0        
            ){
                setcontador(contador +1)
                setindextarget([])
            }
    }, [indextarget])
    
    
    return (
        <CardContainer onClick={handleclick}  volteo={volteo}>
            <Front> <img src={Loading} /></Front>
            <Back> <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${img}.png`} />
            </Back>

        </CardContainer>
    )
}

export default Card;
