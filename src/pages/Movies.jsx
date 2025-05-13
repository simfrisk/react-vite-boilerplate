import { useEffect } from "react"

export const Movies = () => {
  //Here we want to fetch the movies from the API

  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=inception`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <p>Movies</p>
    </>
  )
}