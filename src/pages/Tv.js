import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TvAction } from '../redux/action/TvAction';
import Loading from '../component/Loading';
import TvBanner from '../component/TvBanner';

import TvSlide from '../component/TvSlide';


const Tv = () => {
    const dispatch = useDispatch();
    const {popularTvs, onTheAirTvs, topRatedTvs, loading} = useSelector(state=> state.tv);

    useEffect(() => {
        dispatch(TvAction.getTv())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /* dispatch와 useEffect은 짝꿍 */

    if (loading) {
      return (
        <Loading />
      )
    }

  return (
    <div> 

      <div className='contents'>
      <TvBanner tv={popularTvs.results[4]}/>  
        <h2>What's popular</h2>
        <TvSlide tv={popularTvs} />
        <h2>Top Rated Movies</h2>
        <TvSlide tv={onTheAirTvs} />
        <h2>upcoming Movies</h2>
        <TvSlide tv={topRatedTvs} />
      </div>
    </div>
  )
}

export default Tv
