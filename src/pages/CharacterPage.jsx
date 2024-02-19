import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading';

export default function CharacterPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setIsLoading(true);
        const json = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const res = await json.json();
        if (res.error) {
          navigate('/not-found')
        }
        setCharacter(res);
        setIsLoading(false)
      } catch (err) {
        console.log("[CHARACTER_PAGE] ", err)
      }
    }
    fetchCharacter()
  }, [id])

  if (isLoading) {
    return <Loading/>
  }


  return (
    <div>
      {character?.name}
      {character?.status}
      {character?.gender}
      {character?.episode}
      <img alt="example" src={character?.image} />
    </div>
  )
}