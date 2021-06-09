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
  let buscar;
  let filtro='';
  if(props.genre){
    buscar = ApiConsumer.getMoviesByGenre;
    filtro=props.genre;
  }
  else{
    buscar = ApiConsumer.getMovies;
  }
  useEffect(() => {
      const getMovies = async() => {
          let result= await buscar(filtro);
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
      breakpoint: { max: 3000, min: 1100 },
      items: 9,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1100, min: 100 },
      items: 8,
      slidesToSlide: 1 
    },
    tabletMedium: {
      breakpoint: { max: 1000, min: 900 },
      items: 7,
      slidesToSlide: 1 
    },
    tabletMediums: {
      breakpoint: { max: 900, min: 800 },
      items: 6,
      slidesToSlide: 1 
    },
    tabletSmall: {
      breakpoint: { max: 800, min: 700 },
      items: 5,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 700, min: 600 },
      items: 4,
      slidesToSlide: 1 
    },
    mobileSmall: {
      breakpoint: { max: 600, min: 500 },
      items: 3,
      slidesToSlide: 1 
    },
    mobileExtraSmall: {
      breakpoint: { max: 500, min: 0 },
      items: 2,
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
