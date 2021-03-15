import React, { useState, useEffect } from "react";
import { SectionGameBoard , Congrats, ContainerCongrats, Enlace } from "../styles/GameBoardStyles";
import Card from "./Cards"
const GameBoard = ({ items, id }) => {
    // states que se usaran
    const [contador, setcontador] = useState(0);
    const [indextarget, setindextarget] = useState([]);
    const [FullItems, setFullItems] = useState([]);
    const [contadorCartas, setcontadorCartas] = useState(0)
      // crear los ids con base en el numero aleatorio
    const defineId = (id) => {
        let ids = [];
        let number = id
        while (ids.length < 10) {
            ids.push(number += 1)
        }
        return ids
    }
    // crear el nuevo objeto que tendra los id
    const ItemsID = (items, id) => {
        const ids = defineId(id)
        items.map((item, index) => {
            item.id = ids[index]
        })
        return items
    }
    const CleanItems = () => {
        const FullItems = [...ItemsID(items, id), ...ItemsID(items, id)]
        const RandomItems = FullItems.sort(() => Math.random() - 0.5)
        return RandomItems
        
    }
    useEffect(() => {
        setFullItems(CleanItems())
    }, [])
    if (indextarget.length === 2){
        const match = FullItems[indextarget[0]] === FullItems[indextarget[1]]
        if(match){
            const newGame = [...FullItems]
            newGame[indextarget[0]].volteo = true;
            newGame[indextarget[1]].volteo = true;
            setFullItems(newGame)
            setcontadorCartas(contadorCartas + 1)

            const newIndexes = [...indextarget]
            newIndexes.push(false)
            setindextarget(newIndexes)
        }else{
            const newIndexes = [...indextarget]
            newIndexes.push(true)
            setindextarget(newIndexes)
        }
    }
    return (
        <SectionGameBoard>
            {FullItems.map((item, id) => {
                return (
                    <Card
                        name={item.name}
                        id={id}
                        img={item.id}
                        contador={contador}
                        setcontador={setcontador}
                        items={FullItems}
                        indextarget={indextarget}
                        setindextarget={setindextarget}
                        >

                    </Card>
                )
            })}
            {
                (contadorCartas==10) &&  ( 
                <Congrats><ContainerCongrats>
                <h2>Felicidades </h2>
                <Enlace to ="/"><p>Volver a jugar</p></Enlace>
                </ContainerCongrats></Congrats> )
            }
        </SectionGameBoard>
    )
}
export default GameBoard;