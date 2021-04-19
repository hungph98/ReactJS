import React from 'react';
import {Row, Col, Card } from 'antd';



const {Meta} = Card;

const listMovie = (props)=>{
    return(
        <>
            <Row style={{margin: '30px 0px'}}>
                <Col span={20} offset={2}>
                    <Row>
                        {props.dataMovie.map((item, index)=>(
                            <Col span={6}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}/>}
                                >
                                    <Meta title={item.title} />
                                </Card>,
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default React.memo(listMovie);