import React from 'react';
import { Row, Col, Card, Skeleton} from 'antd';
import { Link } from 'react-router-dom';
import { helper } from '../helpers/common';
import PropTypes from 'prop-types';
import Slugify from 'react-slugify';

const {Meta} = Card;
const ListMovie = (props) =>{
    if(props.loading || helper.isEmptyObject(props.movies)){
        return(<Skeleton active/>)
    }
    return(
        <Row style={{margin: '20px 0px'}}>
            {props.movies.map((item, index) => (
                <Col span={6}>
                    <Link to={`/movie-detail/${Slugify(item.title)}~${item.id}`}>
                        <Card
                            hoverable
                            style={{ width: 240,  marginTop: '20px' }}
                            cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}  />}
                        >
                            <Meta title={item.title}  />
                        </Card>,
                    </Link>
                </Col>
            ))}
        </Row>
    )
}
ListMovie.propTypes = {
    loading : PropTypes.bool.isRequired,
    movies : PropTypes.array.isRequired
}

export default React.memo(ListMovie);