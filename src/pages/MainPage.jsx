import { Flex, Input } from "antd";
import { useEffect, useState } from "react";
import { useDebounce } from "../useDebounce";
import CharactersCard from "../CharactersCard";
import Pagination from "../components/UI/Pagination";

function MainPage() {
  const [characters, setCharacters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState();
  const [isLoading, setIsLoading] = useState(true)
  const serach = useDebounce(name)

 
  const onChange = (page) => {
    setCurrentPage(page)
  }
  useEffect(() => {

    const fetchCharacters = async () => {
      const json = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      const res = await json.json();
      setCharacters(res);
    }
    fetchCharacters()
    try {
      setIsLoading(false)
      fetchCharacter()
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(true)
    }
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
      {/* <Pagination size='large' total={characters?.info?.count} onChange={onChange} currentPage />; */}
      <Pagination total={characters?.info?.count} onChange={onChange}/>
    </>
  )

}
export default MainPage;