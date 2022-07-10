import { useState, useEffect } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/peliculas.model";

export default function LandingPage(){

    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() => {
      const timerId = setTimeout(() => {

        setPeliculas({enCartelera:[
          {
            id: 1, titulo: 'Spider-Man: Far from Home',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePmykMged8LWULdYFiXKibVtTqnJNPcfoZw&usqp=CAU'
         },    
         {
          id: 2, titulo: 'Moana',
          poster: 'https://m.media-amazon.com/images/I/81T25ApPNjL._SL1372_.jpg'
         }
        ],
       proximosEstrenos:  [
        {
          id: 3, titulo: 'Soul',
          poster: 'https://lumiere-a.akamaihd.net/v1/images/image_5e27f8d3.jpeg?region=0,0,648,972'     
        }
       ]})

      }, 500);

      return () => clearTimeout(timerId);
    })

    return(
        <>
          <h3>En Cartelera</h3>
          <ListadoPeliculas peliculas={peliculas.enCartelera}/>

           <h3>Próximos Estrenos</h3>
           <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
         </>
    )
}