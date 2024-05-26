import { FETCH_MOVIES_SUCCESS, TOGGLE_FAVORITE } from "./ActionType";


export const fetchMovies = () => async (dispatch) => {
    try {
      const response = await fetch(process.env.REACT_APP_MOVIES_API);
      
      let data = await response.json();
      let data2 =[];
      data.forEach((item) =>{
        item.isFavourite = false;
        data2.push(item);
      })
      data2.sort((a,b) => b.rating-a.rating);
      dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data2 });
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  
  export const toggleFavorite = (id) => (dispatch) => {
    dispatch({ type: TOGGLE_FAVORITE, payload: id });
  };
  