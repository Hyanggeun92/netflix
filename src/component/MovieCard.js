import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ item }) => {
  let navigate = useNavigate();

    const { genreList } = useSelector(state=>state.movie)
  return (
    <div>
      <div
        className="card"
        style={{
          backgroundImage:
            "url(" +
            `https://image.tmdb.org/t/p/w355_and_h200_multi_faces${item?.backdrop_path}` +
            ")",
        }}
      >
        <div className="card-overlay" onClick={()=>navigate(`/movies/${item.id}`)}>
            <h1>{item.title}</h1>
            <div className='genre'>
                {item.genre_ids.map((id,idx)=>
                <Badge bg="danger" key={idx}>
                    {genreList.find(item=>item.id==id).name}
                </Badge>
                )}
                {/* {item.genre_ids} */}
            </div>
            <div className="vote-group">
                <span className="vote-average">{item.vote_average}</span>
                <span className="adult-info">{item.adult? "청불" : "under18" }</span>
            </div>
        </div>

      </div>
    </div>
  )
}

export default MovieCard
