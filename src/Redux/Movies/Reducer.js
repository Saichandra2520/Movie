

const initialState = {
    movies: [],
    favoriteMovies: [],
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MOVIES_SUCCESS':
        return { ...state, movies: action.payload };
      case 'TOGGLE_FAVORITE':
        const updatedMovies = state.movies.map(movie =>
          movie.id === action.payload ? { ...movie, isFavourite: !movie.isFavourite, time: Date.now()} : movie
        );
        const favoriteMovies = updatedMovies.filter(movie => movie.isFavourite == true);
        return { ...state, movies: updatedMovies, favoriteMovies };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  