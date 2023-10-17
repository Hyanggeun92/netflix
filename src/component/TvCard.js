import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const TvCard = ({ item }) => {
    let navigate = useNavigate();

    const { genreList } = useSelector(state=>state.tv)
  return (
    <div>
      <div
        className="card tv-card"
        style={{
          backgroundImage:
            "url(" +
            `	https://www.themoviedb.org/t/p/w220_and_h330_face${item?.poster_path}` +
            ")",
        }}
      >
        <div className="card-overlay" onClick={()=>navigate(`/tv/${item.id}`)}>
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

export default TvCard
