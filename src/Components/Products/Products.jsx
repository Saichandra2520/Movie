import { useDispatch, useSelector } from 'react-redux';
import FavIcon from '../../assets/images/star-regular.svg'
import { fetchMovies, toggleFavorite } from '../../Redux/Movies/Action';
import { useEffect } from 'react';
import ProductCard from './ProductCard';


  
  export default function Products() {
    const dispatch = useDispatch();
    const { movies } = useSelector(state => state);
    
   
    
   useEffect(() => {
    dispatch(fetchMovies());
    console.log(movies);
   },[dispatch]);
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Movies</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {movies?.map((product) => (
              <ProductCard product={product} key={product.id}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
  