import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../Redux/Movies/Action';
import FavIcon1 from '../../assets/images/star-regular.svg'
import FavIcon2 from '../../assets/images/star-solid.svg'
import { useNavigate } from 'react-router-dom';


const ProductCard = ({product}) => {
    const [FavIcon, setFavIcon] = useState(product?.isFavourite);
    const dispatch = useDispatch();
    const handleFavoriteToggle = () => {
        dispatch(toggleFavorite(product.id));
        setFavIcon(!FavIcon);
      };
      
    

    const handleImdb = (e) =>{
        e.preventDefault();
        window.location = `${product.imdb_url}`;
    }


  return (
    <div key={product.id} className="group relative">
                <div onClick={handleImdb} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  
                  <img
                    src={require(`../../assets/${product.image}`)}
                    alt="movie-image"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                  
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-black-700 font-medium">
                      <p className='text-m'>
                        <span aria-hidden="true" className="absolute " />
                        {product.movie}
                      </p>
                      
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Rating: {product.rating}/10</p>
                  </div>
                  <button onClick={handleFavoriteToggle}>
                  <img src={FavIcon?FavIcon2:FavIcon1}  className="text-sm w-7 h-7 text-gray-900" ></img>
                  </button>
                  
                </div>
                
    </div>
  )
}

export default ProductCard