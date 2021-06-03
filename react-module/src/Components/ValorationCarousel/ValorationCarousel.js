import React, { useEffect, useState }  from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import ApiConsumer from "../../Util/ApiConsumer.js";
import BoxMovie from '../BoxMovie/BoxMovie.js';
import { movieAction } from '../../Store/Actions/movieActions.js';
import ValorationCard from '../ValorationCard/ValorationCard.js';


const ValorationCarousel = (props) => {

    let [valorations, setValorations] = useState([]);
    let [pintar, setPintar] = useState(false);
    useEffect(() => {
        const getValoration = async() => {
            let result= await ApiConsumer.getValoration();
            console.log(result.respuesta);
            if(result.respuesta.length>0){
                setValorations(result.respuesta);
                setPintar(true);
            }
            
        }      
        getValoration();  
    }, [])
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 950 },
      items: 3,
      slidesToSlide: 1 
    },
    tabletMedium: {
      breakpoint: { max: 950, min: 750 },
      items: 3,
      slidesToSlide: 1 
    },
    tabletMediums: {
      breakpoint: { max: 750, min: 650 },
      items: 2,
      slidesToSlide: 1 
    },
    tabletSmall: {
      breakpoint: { max: 650, min: 464 },
      items: 1,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  }
    return(
      
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={false}
        autoPlay={false}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={50}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="valoration-container"
      >
        {valorations.map((valoration, index) => {
            return(
                <ValorationCard 
                key={index} 
                ruta={valoration.movie.backdrop_path} 
                title={valoration.movie.title.toUpperCase()}
                user={valoration.user.name} 
                comment = {valoration.comment}
                stars = {valoration.stars}/>
            )
        })}
      </Carousel>
           
    )
}

export default ValorationCarousel;