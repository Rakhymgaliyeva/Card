import {Flex} from "antd";
import { useEffect, useState } from "react";
import CharactersCard from "./charactersCard";


function App(){
  const [characters, setCharacters]=useState();

  const fetchCharacters = async ()=>{
    const json=await fetch('https://rickandmortyapi.com/api/character')
    const res =await json.json();
    setCharacters(res);
    console.log(res)
  }

  useEffect(()=>{
    fetchCharacters()
  }, [])

  return(
    <>
    <Flex wrap='wrap' gap='small'>
      {characters?.results && characters.results.map(characters=>(
        <div key={characters.id}>
          <CharactersCard id={characters.id} name={characters.name} status={characters.status} gender={characters.gender} image={characters.image}/>
        </div>
      ))}
    </Flex>
    </>
  )

}
export default App;