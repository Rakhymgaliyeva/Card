import { Flex, Input, Pagination } from "antd";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import CharactersCard from "./CharactersCard";


function App() {
  const [characters, setCharacters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState();
  const serach = useDebounce(name)

  const fetchCharacters = async () => {
    const json = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${serach}`)
    const res = await json.json();
    setCharacters(res);
  }
  const onChange = (page) => {
    setCurrentPage(page)
  }
  useEffect(() => {
    fetchCharacters()
  }, [currentPage, serach])

  return (
    <>
      <Flex align="center" wrap='wrap' gap='small'>
        <Input placeholder="Basic usage" onChange={(e) => setName(e.target.value)} />;
        {characters?.results && characters.results.map(character => (
          <div key={character.id}>
            <CharactersCard
              id={character.id}
              name={character.name}
              status={character.status}
              gender={character.gender}
              image={character.image}
            />
          </div>
        ))}

      </Flex>
      <Pagination size='large' total={characters?.info?.count} onChange={onChange} currentPage />;
    </>
  )

}
export default App;