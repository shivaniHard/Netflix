/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useEffect, useState } from 'react';
import './Home.scss';
import axios from 'axios';
import banner from './image/banner.jpg';


const apiKey = "cce7d21b98fbe33b13dbd4637a62d78d";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";


const Card = (img: any) => (
  <img
    src={`https://image.tmdb.org/t/p/w500${img}`} 
    alt="cover"
    className="card"
  />
);


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Row = ( title:any,  arr = [] ) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
        //@ts-ignore
        <Card key={index} img={item.poster_path} />
        
      ))}
    </div>
  </div>
);

function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  
  useEffect(() => {
    const fetchMovies = async () => {
      const { data: { results } } = await axios.get(
        `${url}/movie/${upcoming}?api_key=${apiKey}`
      );
      setUpcomingMovies(results);
    };
    fetchMovies();
  }, []);

  return (
    <section className="home">
      <div className="banner">
        <img src={banner} alt="" />
      </div>
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
     
      <Row title={"Popular On Netflix"} arr={upcomingMovies} />
      <Row title={"Recently Viewed"} arr={upcomingMovies} />
      <Row title={"My List"} arr={upcomingMovies} />
      <Row title={"Movies"} arr={upcomingMovies} />
    </section>
  );
}

export default Home;
