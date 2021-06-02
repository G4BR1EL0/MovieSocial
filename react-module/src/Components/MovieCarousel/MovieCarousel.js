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
          console.log(result);
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
      items: 3,
      slidesToSlide: 3 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  }
    return(
      
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {movies.map((movie, index) => {
            return(
                <BoxMovie 
                key={index} 
                peli={movie} 
                placeholder={movie.backdrop_path}
                funcion={detalles} 
                ruta = {`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
            )
        })}
      </Carousel>
           
    )
}

export default MovieCarousel;
