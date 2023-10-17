import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieAction } from '../redux/action/MovieAction';
import Loading from '../component/Loading';
import Banner from '../component/Banner';
import MovieSlide from '../component/MovieSlide';


const Home = () => {
    const dispatch = useDispatch();
    const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(state=> state.movie);

    useEffect(() => {
      dispatch(MovieAction.getMovies())
  
    }, []);
    /* dispatch와 useEffect은 짝꿍 */

    if (loading) {
      return (
        <Loading />
      )
    }

  return (
    <div> 
      <Banner movie={popularMovies.results[11]}/>
      <div className='contents'>
        <h2>What's popular</h2>
        <MovieSlide movie={popularMovies} />
        <h2>Top Rated Movies</h2>
        <MovieSlide movie={topRatedMovies} />
        <h2>upcoming Movies</h2>
        <MovieSlide movie={upcomingMovies} />
      </div>
    </div>
  )
}

export default Home
