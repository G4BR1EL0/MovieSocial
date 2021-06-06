import React, { useEffect, useState }  from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import ApiConsumer from "../../Util/ApiConsumer.js";
import BoxMovie from '../BoxMovie/BoxMovie.js';
import { movieAction } from '../../Store/Actions/movieActions.js';

const MovieCarousel = (props) => {

  let [movies, setMovies] = useState([]);
  useEffect(() => {
      const getMovies = async() => {
          let result= await ApiConsumer.getMovies();
          setMovies(result);
      }      
      getMovies();  
  }, [])
  const dispatch = useDispatch();
  const history = useHistory();
  const detalles = (movie) => {
      dispatch(movieAction(movie));
      history.push('/movieDetail');
  }
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 12,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 950 },
      items: 9,
      slidesToSlide: 1 
    },
    tabletMedium: {
      breakpoint: { max: 950, min: 750 },
      items: 8,
      slidesToSlide: 1 
    },
    tabletMediums: {
      breakpoint: { max: 750, min: 650 },
      items: 6,
      slidesToSlide: 1 
    },
    tabletSmall: {
      breakpoint: { max: 650, min: 464 },
      items: 4,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1 
    }
  }
    return(
      
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={50}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="boxMF"
      >
        {movies.map((movie, index) => {
            return(
                <BoxMovie 
                key={index} 
                peli={movie} 
                placeholder={movie.poster_path}
                funcion={detalles} 
                ruta = {`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
            )
        })}
      </Carousel>
           
    )
}

export default MovieCarousel;
