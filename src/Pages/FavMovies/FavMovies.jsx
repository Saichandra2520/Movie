import React, { useEffect } from 'react'
import Products from '../../Components/Products/Products'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../Components/Products/ProductCard';
import { fetchMovies } from '../../Redux/Movies/Action';

const FavMovies = () => {
    const { favoriteMovies } = useSelector(state => state);
    favoriteMovies.sort((a,b) => b.time-a.time);
       
  return (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Favourite Movies</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {favoriteMovies?.map((product) => (
              <ProductCard product={product} key={product.id}/>
            ))}
          </div>
        </div>
      </div>
  )
}

export default FavMovies