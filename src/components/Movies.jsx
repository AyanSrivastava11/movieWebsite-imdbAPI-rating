import React from 'react'
import MovieCard from './MovieCard'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Pagination from './Pagination'

function Movies({handleADDtoWatchList , handleRemoveFromWatchList, watchList}) {

  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () =>{
    if(pageNo == 1 ){
      setPageNo(pageNo)
    }
    else
      setPageNo(pageNo - 1)
  }

  const handleNext = () =>{
    setPageNo(pageNo + 1)
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&api_key=89275da704ae3c55b3e092851c004c56&language=en-US&page=${pageNo}&sort_by=popularity.desc`).then(function(res){
      setMovies(res.data.results);
      console.log(res.data.results);
    })
  },[pageNo])

  return (
    <div className='p-5'>
      <div className='text-4xl my-8 font-bold text-center underline rounded-lg  '>
        Trending Movies
      </div>
      <div className='flex flex-row flex-wrap justify-around gap-9'>
        
        {movies.map((movieObj) =>{
          return <MovieCard movieObj={movieObj} key={movieObj.id} poster_path={movieObj.poster_path} name={movieObj.original_title} handleADDtoWatchList={handleADDtoWatchList} handleRemoveFromWatchList = {handleRemoveFromWatchList} watchList={watchList}/>
        })}
      </div>

      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev= {handlePrev} />
    </div>
  )
}

export default Movies

// https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&api_key=89275da704ae3c55b3e092851c004c56&language=en-US&page=1&sort_by=popularity.desc