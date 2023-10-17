import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import TvVideo from '../component/TvVideo';


const TvDetail = () => {
    let [showDetail, setShowDetail] = useState({});
    const API_KEY = process.env.REACT_APP_API_KEY;
    let { id } = useParams();
  
    const detail = async() => {
      let url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`;
      let response = await fetch(url);
      let data = await response.json();
      console.log(data)
      setShowDetail(data);
    }
  
    useEffect(()=> {
      detail();
    }, [showDetail])
    return (
      <Container>
        <Row className='detail-section'>
          <Col lg={6} className='detail-img-card'>
            <div className="detail-img" style={{backgroundImage:"url(" + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${showDetail?.poster_path}` + ")",}}>
            </div>
          </Col>
          <Col lg={6} className='detail-info-group'>
            <div className="detail-title">{showDetail?.original_name}</div>
          <hr/>
            <div className="detail-tagline">{showDetail?.tagline}</div>
            <div className="detail-overview">{showDetail?.overview}</div>
            <div className="detail-info">
              <span className="detail-vote">{showDetail?.vote}</span>
              <div className="detail-adult">
                {showDetail?.adult? "19+":"19-"}
              </div>
            </div>
            <hr/>
            <div className="dtail-info2">
            <div>
            <Badge bg="danger">genres</Badge>            
            {showDetail?.genres &&
                showDetail.genres.map((genre, idx) => (
                  <Badge bg="none" key={idx}>
                    {genre.name}
                  </Badge>
                ))}
              </div>
              <div>
                <Badge bg="danger">name</Badge>
                <Badge bg="none">{showDetail?.name}</Badge>
                
              </div>
              
              <div>
                <Badge bg="danger">first_air_date</Badge>
                <Badge bg="none">{showDetail?.first_air_date}</Badge>
              </div>

            </div>
            <div>
            <TvVideo />
          </div>

          </Col>
        </Row>
      </Container>
    )
  }

export default TvDetail
