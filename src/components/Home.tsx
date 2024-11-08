/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import './Home.scss';
import axios from 'axios';
import banner from './image/banner.jpg';

const apiKey = "cce7d21b98fbe33b13dbd4637a62d78d";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";


const Card = ({ img }: { img: string }) => (
  <img
    src={`https://image.tmdb.org/t/p/w500${img}`} 
    alt="cover"
    className="card"
  />
);


const Row = ({ title, arr }: { title: string; arr: any[] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr?.map((item, index) => (
        <Card key={index} img={item.poster_path} />
      ))}
    </div>
  </div>
);

function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const { data: { results } } = await axios.get(
          `${url}/movie/${upcoming}?api_key=${apiKey}`
        );
        setUpcomingMovies(results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  
  if (loading) {
    return <>Loading...</>;
  }

  return (
    <section className="home">
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <Row title="Upcoming Movies" arr={upcomingMovies} />
      <Row title="Popular On Netflix" arr={upcomingMovies} />
      <Row title="Recently Viewed" arr={upcomingMovies} />
      <Row title="My List" arr={upcomingMovies} />
      <Row title="Movies" arr={upcomingMovies} />
    </section>
  );
}

export default Home;
