import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Movie from './Movie'


const HomeScreen = (props) => {

    return (
      <>
        <h1 className='home-page-heading'>Latest Product</h1>
          {loading ? 
            (<Loader />) 
          : error ? 
            (<Message variant='danger'> {error} </Message> ) 
          : (
            <>
              <Row>
                {movies.map(movie => (
                    <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
                      <Movie movie={movie} />
                    </Col>
                ))}
              </Row>
              <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
            </>
            )
          }
      </>
    )
}


export default HomeScreen
