import api from '../api';


const API_KEY = process.env.REACT_APP_API_KEY
function getTv() {
    return async(dispatch) => {
        try {
            dispatch({type:"GET_TVS_REQUEST"})

            const popularTvApi = api.get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
            const onTheAirApi = api.get(`/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`)
            const topRatedApi = api.get(`/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)

            /* 장르 정보를 요청하는 api */
            const genreApi = api.get(`/genre/tv/list?api_key=${API_KEY}&language=en-US`)

            let [popularTvs, onTheAirTvs, topRatedTvs, genreList] = await Promise.all([
                popularTvApi, 
                onTheAirApi, 
                topRatedApi,
                genreApi
            ]);
            //console.log("genre", genreList)
    
            dispatch({
                type: "GET_TVS_SUCCESS",
                payload: {
                    popularTvs: popularTvs.data,
                    onTheAirTvs: onTheAirTvs.data,
                    topRatedTvs: topRatedTvs.data,
                    genreList: genreList.data.genres
                }    
            })
             console.log(popularTvs)
            console.log(onTheAirTvs)
            console.log(topRatedTvs)
        } catch(error) {
            //에러 핸들링하는 곳
            dispatch({type: "GET_TVS_FAILURE"})

        }
    }
}

export const TvAction = {
    getTv,
    //함수 구분을 하기 위해 
}