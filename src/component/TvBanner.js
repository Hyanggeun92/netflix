import React from 'react'

const TvBanner = ({tv}) => {
    return (
        <div style={{
            backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces/${tv.backdrop_path
        }` + ")"
        }} className='banner'>
          <div className="banner-info">
            <h1>{tv.name}</h1>
            <p>{tv.overview}</p>
          </div>
            
        </div>
      )
    }

export default TvBanner
