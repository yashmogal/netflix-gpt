import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",  
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    upcomingMovies: null,
    horrorMovies: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedTvShows: (state, action) => {
      state.topRatedTvShows = action.payload;
    },
    addOnAirTvShows: (state, action) => {
      state.onAirTvShows = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    }

  },
});

export const { addNowPlayingMovies,addTrailerVideo,addUpcomingMovies,addTopRatedMovies,addTopRatedTvShows,addOnAirTvShows} = moviesSlice.actions;

export default moviesSlice.reducer;
