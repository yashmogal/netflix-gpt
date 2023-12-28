import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>

          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
          <MovieList title={"Top Rated TV Shows"} movies={movies.topRatedTvShows}/>
          <MovieList title={"On Air TV Shows"} movies={movies.onAirTvShows}/>


          
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;