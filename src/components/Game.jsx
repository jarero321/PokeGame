import React, {useState, useEffect} from "react"
import ItemLoading from "./ItemLoading"
import styled from "styled-components";
import GameBoard from "./GameBoard";
import Fondo from "../img/Fondo-home.svg"

const SectionGame = styled.section`
    width:100vw;
    height:100vh;
    background-image: url(${Fondo});
    background-position:center;
    background-size:cover;

`;
const Game = () => {
    // estados que serviran para almacenar los datos que fueron consultados
    const [pokemon, setPokemon] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [idPokemon, setidPokemon] = useState(Math.round(Math.random()*500))
    
    // funcion async que pide los datos y obtiene solo los resultados
    const PokeApi = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${idPokemon}`);
        const pokemons = await response.json();
        setPokemon([...pokemons.results])
        setTimeout(( ) => {
            setLoading(true)
        },2000)
    }
    useEffect(() => {
         PokeApi()
    },[])
    return (
        <SectionGame  >
            {
                (Loading == false) ? (<ItemLoading ></ItemLoading> ) 
                :( <GameBoard items={pokemon}
                    id={idPokemon} /> )
            }
        </SectionGame>
    )
}
export default Game;