import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addOnAirTvShows } from "../utils/moviesSlice";

const useOnAirTvShows = () => {
  const dispatch = useDispatch();

  const getOnAirTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addOnAirTvShows(json.results));
  };

  useEffect(() => {
    getOnAirTvShows();
  }, []);
};

export default useOnAirTvShows;