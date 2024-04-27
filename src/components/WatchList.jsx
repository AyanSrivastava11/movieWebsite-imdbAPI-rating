import React, { useEffect, useState } from "react";
import genreids from "../Utility/genre";

function WatchList({ watchList, setWatchList, handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genre");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });

    setWatchList([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });

    setWatchList([...sortedDecreasing]);
  };

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 gap-6">
        {genreList.map((genre) => {
          return (
            <div
              key={genre}
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl font-bold text-white items-center mx-4 flex-nowrap cursor-pointer transition-all hover:shadow-lg"
                  : "flex justify-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl font-bold text-white items-center mx-4 flex-nowrap cursor-pointer transition-all hover:shadow-lg"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-8">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          className="h-[3rem] w-[18rem] bg-gray outline-none px-4 border-solid border-2 border-gray-600 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500 shadow-md"
          placeholder="Search For Movies"
          autoFocus="on"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div onClick={sortIncreasing} className="p-2 cursor-pointer">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div className="p-2 cursor-pointer" onClick={sortDecreasing}>
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchList
              .filter((movieObj) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2 transition-all ">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[10rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt=""
                      />

                      <div className="mx-10">{movieObj.title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemoveFromWatchList(movieObj)}
                      className="text-red-800 cursor-pointer hover:text-red-600 transition-all duration-300 hover:font-bold "
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
